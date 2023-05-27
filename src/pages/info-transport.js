import react, { Component } from "react";

const Information = [
  {
    "name": "VL-2300R",
    "image": "../물류/VL-2300R.png",
    "manufacturer" : "제조사: ㈜볼로랜드",
    "kind": "종류: 배송드론",
    "type": "유형: 동축로터 멀티콥터",
    "characteristics": "특징: 적재중량 자동감지 및 비행안전성을 고려한 FC PID 자동 제어 기능 (특허출원)",
    "application": "적용분야: 고중량 물품 배송",
  },
  {
    "name": "Hexa_Tri-VTOL_120",
    "image": "../물류/Hexa_Tri-VTOL_120.png",
    "manufacturer" : "제조사: 헥사팩토리",
    "kind": "종류: VTOL(수직이착륙)",
    "type": "유형: TILT VTOL(천이식 수직이착륙)",
    "characteristics": "특징: 이륙 준비 3분 이내, 초소형 수직이착륙 드론으로 1인 운영 가능, GPS 및 에어 스피드 센서 통합 모듈 및 아두파일럿 최신 펌 적용.",
    "application": "적용분야: 장거리 정찰, 맵핑, 촬영",
  },
  {
    "name": "Hexa_Q-50_UAV",
    "image": "../물류/Hexa_Q-50_UAV.png",
    "manufacturer" : "제조사: 헥사팩토리",
    "kind": "종류: 멀티콥터",
    "type": "유형: 쿼드콥터",
    "characteristics": "특징: 5kg Payload 탑재 후 40분 내외 비행 가능, 최대 비행시간 80분(No Payload).",
    "application": "적용분야: 1) 시설물 점검 및 정찰, 감시 2) 중거리 소화물 배송용 3) 다목적 중형급 멀티콥터",
  },
  {
    "name": "WWM-H1340",
    "image": "../물류/WWM-H1340.png",
    "manufacturer" : "제조사: 위즈윙",
    "kind": "종류: 멀티콥터",
    "type": "유형: 헥사콥터",
    "characteristics": "특징: 1) H형태의 횡류형 기체로 큰 부피의 임무장비 탑재에 유리한 구조 2) 물품 탑재/다양한 임무장비 탑재 가능.",
    "application": "적용분야: 1) 물류, 운송 2) 탐지(악취, 위험물질) 통합 솔루션",
  },

  {
    "name": "AF100",
    "image": "../물류/AF100.png",
    "manufacturer" : "제조사: 나르마",
    "kind": "종류: 배송드론",
    "type": "유형: 틸트로더",
    "characteristics": "특징: 세계 최초 전동식 소형 틸트로터 기술이 적용된 드론",
    "application": "적용분야: 1) AED, 응급 의약품 배송 드론 2) 관제 드론 3) 물류 배송 드론",
  },
];

export default Information;