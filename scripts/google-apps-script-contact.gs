/**
 * 문의하기 → Google 스프레드시트 저장
 * 
 * 사용 방법:
 * 1. Google 스프레드시트 생성
 * 2. 확장 프로그램 → Apps Script 열기
 * 3. 이 코드 전체 붙여넣기 후 저장
 * 4. 배포 → 새 배포 → 유형: 웹 앱
 *    - 실행 사용자: 나
 *    - 액세스: "모든 사용자" (문의 폼이 공개인 경우)
 * 5. 배포 후 나오는 "웹 앱 URL"을 복사
 * 6. 프로젝트 루트 .env.local에 다음 추가:
 *    CONTACT_SCRIPT_URL=복사한_웹앱URL
 *    (서버에서만 사용되므로 NEXT_PUBLIC_ 불필요)
 */

const SHEET_NAME = '문의'; // 시트 이름 (없으면 첫 번째 시트 사용)

/**
 * POST 요청 처리 (웹 폼에서 JSON으로 전송)
 * 필드: name, email, phone, inquiryType, message
 */
function doPost(e) {
  try {
    const sheet = getSheet();
    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.inquiryType || '',
      getInquiryTypeLabel(data.inquiryType),
      data.message || ''
    ];

    sheet.appendRow(row);

    return createJsonResponse({ success: true, message: '문의가 접수되었습니다.' });
  } catch (err) {
    return createJsonResponse(
      { success: false, message: err.message || '처리 중 오류가 발생했습니다.' },
      500
    );
  }
}

/**
 * GET 요청 시 CORS/테스트용 (선택)
 */
function doGet(e) {
  return createJsonResponse({ ok: true, message: 'Contact script is running.' });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.getSheets()[0];
    sheet.setName(SHEET_NAME);
    // 헤더 행 추가
    sheet.getRange(1, 1, 1, 7).setValues([[
      '접수일시', '이름', '이메일', '연락처', '문의유형(값)', '문의유형', '문의 내용'
    ]]);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
  }
  return sheet;
}

function getInquiryTypeLabel(value) {
  const labels = {
    product: '제품 문의',
    purchase: '구매 문의',
    partnership: '제휴/협력 문의',
    support: '기술 지원',
    other: '기타 문의'
  };
  return labels[value] || value || '';
}

function createJsonResponse(body, statusCode) {
  statusCode = statusCode || 200;
  const output = ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
