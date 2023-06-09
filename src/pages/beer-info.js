import react, { Component } from "react";

const Information = [
  {
    "name": "카스 프레시 콜드 브루드",
    "image": "../맥주/카스 프레시 콜드 브루드jpg",
    "percent" : "도수: 4.5%",
    "content": "OB맥주의 메인 맥주이자 밥줄. 좋은 의미든 안좋은 의미든 '대표적인 대한민국 맥주'다. 카스 맥주 특유의 톡쏘는 맛 중심으로 인기를 끌고 있다.  깔끔하고 부드러운 맛으로 호평받았다. 소맥을 즐기는 사람들이 유난히 좋아하는 맥주. 이유는 소주랑 섞어도 맛의 이질감이 거의 없기 때문이다."
  },
  {
    "name": "테라",
    "image": "../맥주/테라.jpg",
    "percent" : "도수: 4.6%",
    "content": "2019년 3월에 출시한 하이트진로의 알코올 4.6도의 라거맥주이다. 청정라거라는 슬로건을 걸고 호주 골든 트라이앵글 맥아를 100% 사용했다고 한다. 다만 주의할점은  호주산 비율이 100%란 말일 뿐 전분이 포함되었다. 맛은 알콜 도수가 낮은 만큼 라이트하면서 단맛이 강하고 마치 탄산수처럼 깔끔하다. 즉 맛 자체는 강하지 않지만 그 대신 탄산이 강한 것을 강점으로 내세우는 맥주."
  },
  {
    "name": "아사히 슈퍼 드라이",
    "image": "../맥주/아사히 슈퍼 드라이.jpg",
    "percent" : "5.0%",
    "content": "첫 출시는 1987년 3월. " + "Super dry" + "를 내세우며 일본에 드라이 맥주 열풍을 불러온 맥주로 80년대 초중반 부도위기까지 몰렸던 아사히를 이후 1위로 다시 복귀시킨 맥주다. 현재까지도 부동의 1위 자리를 고수하는 중. "+"일본 맥주"+ "하면 떠오르는 대표적인 브랜드이기도 하다. 아사히 맥주는 가벼운 맛과 깔끔한 홉 향이 특징이다. 일반적으로 맛은 상쾌하고 맑은데, 약간의 곡물 풍미와 함께 깔끔하고 드라이한 느낌이 있다."
  },
  {
    "name": "기린 이치방 시보리",
    "image": "../맥주/기린 이치방 시보리.jpg",
    "percent" : "5.0%",
    "content": "기린맥주에서 생산 판매하는 맥주로 기린라거와 함께 기린맥주의 주력 제품. 부가물 없이 맥아 100%를 사용한다.  '이치방시보리'란 '처음(一番) 짜냈다(搾り)'는 뜻이다. 맥아에서 처음 뽑아낸 맥즙만 사용했다는 점을 강조하는 이름이다. 이치방시보리는 재탕한 맥즙을 사용하지 않아서 맥아의 진한 향미를 최대한 살렸다는 것을 강점으로 홍보하고 있다."
  },
  {
    "name": "버드와이저",
    "image": "../맥주/버드와이저.jpg",
    "percent" : "5.0%",
    "content": "미국을 대표하는 맥주로, 매년 미국에서 판매량 1위를 놓치지 않는 앤하이저부시의 대표적인 상품이다. 미국에서는 블루칼라 노동자 계층의 사람들이 즐겨 마시는 맥주라는 이미지가 있다. 구수한 곡물향과 탄산감이 굉장히 강렬하고 전반적으로 맛 자체가 야성적이라 그런 듯하다. 맥주에 어지간히 익숙해져도 버드와이저를 마시면 혀가 따끔거리는게 느껴질 정도. 사실 맥주 다운 맥주는 마시고 싶은데 주머니 사정이 궁하다면 어딜 가도 손쉽게 살 수 있으면서도 저렴한 버드와이저를 즐겨마실 수밖에 없기도 하고."
  },
  {
    "name": "호가든 ",
    "image": "../맥주/호가든.jpg",
    "percent" : "4.9%",
    "content": "잘 알려져 있는 기본형 호가든은 밀맥주 스타일이지만, 벨기에 맥주 답게 맥아, 물, 홉 만으로 만드는 독일식이 아니라 오렌지 껍질과 코리앤더(고수) 씨앗을 넣어 만들기 때문에 향긋한 산미가 더해져 있다. 밀맥주+가향맥주 특성상 취향을 좀 타는 편이다."
  },
  {
    "name": "하이네켄",
    "image": "../맥주/하이네켄.jpg",
    "percent" : "5.0%",
    "content": "네덜란드의 맥주 브랜드. 유럽뿐만 아니라 세계적으로도 인지도와 판매량에서 최상위를 차지하고 있는 브랜드이다. 현재 국내에서 시판중인 하이네켄의 알코올 도수는 대부분 5%이다. 증류수와 맥아를 섞은 보리, 효모로만 만들며, 효모는 1886년 것을 지금도 사용중이다. 소맥과 맛이 비슷해서 소맥을 좋아하는 사람에게 추천한다. 정제된 쌉쌀함의 목넘김과 묵직한 뒷맛이 대량생산되는 라거 맥주 중에서는 특별한 느낌이다."
  },
  {
    "name": "기네스 드래프트",
    "image": "../맥주/기네스 드래프트.jpg",
    "percent" : "4.2%",
    "content": "아일랜드산 흑맥주 브랜드. 맥주 자체는 호불호가 크게 갈린다. 일단 맛이 상당히 약한 부가물 라거가 대세인 한국 시장에서 자기 맛이 강한 맥주 자체가 호불호가 갈리는데, 기네스는 각각의 버전들이 특히나 자기 맛이 강한 맥주인데다가 드래프트 버전은 취식 방법마저 절차가 있기 때문에 그냥 뚜껑 딱 따서 바로 시원하게 꿀꺽꿀꺽 들이키는 소위 한국식 '빨리빨리' 섭취가 불가능한 문제점 등 여러모로 한국인들의 맥주 문화와 거리가 심하기 때문이다.  취식 방법을 제대로 지키지 못해서 맛이 없는 상태의 기네스만 마셔보고 기네스는 맛이 없는 맥주라는 잘못된 인식을 갖는 등 여러모로 알아보고 마셔야 할 것이 많은것이 발목을 잡는 것이다."
  },
  {
    "name": "칭따오",
    "image": "../맥주/칭따오.jpg",
    "percent" : "4.7%",
    "content": "중국의 맥주 브랜드. 전쟁사로 빚어낸 문화유산급의 맥주 브랜드이며 역사도 깊고 독일 기술로 주조되어 호평받는 맥주다.  자기 색깔을 가지고 있는 맥주이다. 씁쓸한 맛이 적고 달싹하면서도 시원한 청량감을 주는 맛이 일품. 물론 독일식 맥주순수령에 따른 라거를 선호하는 이들은 전통적인 물, 맥아, 호프만 가지고 제조하는 여타 라거 맥주들과 달리 쌀이 들어간다는 이유로 좀 밍밍한 맛이라고 비주류로 치는 이들도 있다. 쌀이나 옥수수 등의 다른 곡물들을 넣어 제조하는 부가물 라거 맥주라도 이 칭다오는 그 자체로 충분히 즐길 수 있는 맥주라는 견해가 일반적이다."
  },
  {
    "name": "산미구엘",
    "image": "../맥주/산미구엘.jpg",
    "percent" : "5.0%",
    "content": "필리핀의 대표 맥주 브랜드. 세계에서 가장 많이 팔리는 맥주 10대 브랜드 중 하나이다. 필리핀이 스페인의 식민지배를 받던 시절에 스페인의 맥주 양조 기술을 바탕으로 맥주를 양조했다. 맛으로는 가히 편의점 수입맥주의 패왕이라고 불릴만 하다. 맥주에 대해서 잘 모르면 필리핀 국기만 보고 피할 수있는데, 일단 먹어보면 오히려 국산 맥주는 말할 것도 없고 소위 선진국은 물론 어지간한 독일 맥주들보다도 훨씬 맛이 뛰어나다. 구수함과 씁쓸함과 시원함 및 목넘김이 모두 적절하여 그야말로 완벽한 조화를 이루는 맥주계의 제왕이라 할만 하다."
  }
];

export default Information;