import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const backgroundAsset = '/background.webp';
const lineAsset = 'https://www.figma.com/api/mcp/asset/ed0d7d6c-b186-4e10-b686-601048330378';

const expertise = ['#UI/UX', '#DESIGN SYSTEM', '#BRANDING', '#GRAPHIC PRESENTATION', '#EDITORIAL'];
const workflows = ['#VISUAL DIRECTION', '#IMAGE & VIDEO GENERATION', '#DESIGN DOCUMENTATION', '#WEB PUBLISHING'];
const tools = ['#FIGMA', '#ADOBE CC', '#CHATGPT', '#KLING AI', '#CODEX'];
const chapterCards = [
  {
    project: 'Project 01',
    year: '2026',
    logo: '부산광역시',
    logoKey: 'busan',
    title: 'Busan Life map',
    subtitle: 'LIFE IN BUSAN MAP',
    body: '부산에서의 모든 생활 정보를 통합하고 검색부터 지도까지 탐색이 자연스럽게 이어지는 모바일 중심 서비스를 설계했습니다.',
    bodyStrong: '부산에서의 모든 생활 정보를 통합',
    service: 'PUBLIC LIFESTYLE MAP SERVICE',
    tags: ['#포털·지도 UI/UX', '#AI 키 비주얼', '#asIS-TOBE', '#생활정보 탐색 구조 개선', '#통합검색'],
  },
  {
    project: 'Project 02',
    year: '2025',
    logo: 'Seoul Arisu',
    logoAsset: '/chapter-logo-01.svg',
    logoKey: 'arisu',
    title: 'Seoul Arisu',
    subtitle: 'K-HUB KNOWLEDGE SYSTEM',
    body: '복잡하게 분산된 공공 민원 정보를 모든 성별, 연령층이 쉽게 찾고 이용할 수 있도록 명확한 서비스 구조로 개선했습니다.',
    service: 'PUBLIC SERVICE WEBSITE',
    tags: ['#UIUX디자인', '#CX컨설팅', '#정보 구조 설계 개선', '#반응형웹', '#접근성 기반 화면설계'],
  },
  {
    project: 'Project 03',
    year: '2024',
    logo: 'Hanhwa',
    logoAsset: '/chapter-logo-03.svg',
    logoKey: 'hanwha',
    title: 'Hanhwa',
    subtitle: 'REMEMBER 121,723',
    body: '끝까지 찾아야 할 태극기, 보훈을 디지털 콘텐츠로 풀어 사용자의 공감과 참여가 자연스럽게 이어지는 캠페인 화면을 제작했습니다.',
    service: 'DIGITAL CAMPAIGN MICROSITE',
    tags: ['#마이크로 캠페인 사이트', '#반응형', '#사용자 참여형 콘텐츠', '#국가 보훈의 날'],
  },
  {
    project: 'Project 04',
    year: '2024',
    logo: 'MERCK',
    logoAsset: '/chapter-logo-09.svg',
    logoKey: 'merck',
    title: 'MERCK Korea',
    subtitle: 'INFLUENCER MARKETING',
    body: '산업체 출입 현황과 안전 데이터를 시각화로 변환해 관리자가 주요 정보를 빠르게 파악하고 통제할 수 있는 시스템을 설계했습니다.',
    service: 'SECURITY MANAGEMENT SYSTEM',
    tags: ['#입출입 데이터 시각화', '#관리자전용 UI/UX', '#3D 비주얼', '#데스크톱 시스템 디자인'],
  },
  {
    project: 'Project 05',
    year: '2024',
    logo: 'DAEWOONG',
    logoAsset: '/chapter-logo-02.svg',
    logoKey: 'daewoong',
    title: 'Daewoong',
    subtitle: 'INFLUENCER MARKETING',
    body: '제약 분야의 전문적인 정보를 정리해 기업의 가치와 주요 사업이 명확하게 전달되는 브랜드 경험을 설계했습니다.',
    service: 'CORPORATE BRAND WEBSITE',
    tags: ['#브랜드 웹 UI/UX', '#반응형', '#브랜드 스토리텔링', '#브랜드 아이덴티티 구조화'],
  },
  {
    project: 'Project 06',
    year: '2024',
    logo: 'DAEWOONG BIO',
    logoAsset: '/chapter-logo-daewoongbio-2.png',
    logoKey: 'daewoongbio',
    title: 'Daewoong bio',
    subtitle: 'BIO INCORPORATED',
    body: '글래스모피즘과 3D 비주얼을 활용해 바이오 기업의 전문성과 미래 가치를 담은 브랜드 웹사이트를 구축했습니다.',
    service: 'BIOPHARMA BRAND WEBSITE',
    tags: ['#브랜드 웹 UI/UX', '#컨텐츠 기반 구조 설계', '#3D비주얼', '#글래스모피즘 스타일'],
  },
  {
    project: 'Project 07',
    year: '2024',
    logo: 'D O',
    logoAsset: '/chapter-logo-05.svg',
    logoKey: 'lgdno',
    title: 'LG D&O',
    subtitle: 'K-HUB KNOWLEDGE SYSTEM',
    body: '기업 내부 지식과 운영 데이터를 더 명확하게 탐색할 수 있도록 정보 구조와 관리 경험을 정리했습니다.',
    service: 'KNOWLEDGE SHARING PLATFORM',
    tags: ['#디자인총괄', '#지식공유', '#ATOMIC DESIGN'],
  },
  {
    project: 'Project 08',
    year: '2024',
    logo: 'P:KET',
    title: 'P:KET',
    subtitle: 'INFLUENCER MARKETING APPLICATIONS',
    body: '인플루언서 마케팅 업무 흐름을 모바일 중심으로 정리해 운영자와 사용자가 빠르게 연결되는 앱 경험을 설계했습니다.',
    service: 'INFLUENCER MARKETING APPLICATION',
    tags: ['#어플리케이션 개발', '#디자인총괄', '#MOBILE'],
  },
];
const boardProjects = [
  {
    no: '01.',
    route: '/work/busan',
    title: '부산광역시 생활지도 공간정보시스템',
    subtitle: 'BUSAN LIFE MAP SPATIAL INFORMATION SYSTEM',
    tags: ['#어플리케이션 개발', '#디자인총괄', '#기획총괄', '#개발관리', '#MOBILE'],
  },
  {
    no: '02.',
    route: '/work/seoul-arisu',
    title: '서울아리수본부 사이버 고객센터 홈페이지',
    subtitle: 'SEOUL ARISU CYBER CUSTOMER CENTER HOMEPAGE',
    tags: ['#서울아리수본부', '#CX CONSULTING', '#UI UX DESIGN', '#PDA', '#RESPONSIVE'],
  },
  {
    no: '03.',
    route: '/work/hanwha',
    title: '한화 보훈 캠페인 마이크로 페이지',
    subtitle: 'HANWHA VETERANS CAMPAIGN MICROPAGE',
    tags: ['#다시찾아야할태극기', '#121,723', '#국가보훈의날', '#RESPONSIVE'],
  },
  {
    no: '04.',
    route: '/work/merck-korea',
    title: '머크코리아 안전출입관리 시스템',
    subtitle: 'MERCK KOREA SECURITY SYSTEM',
    tags: ['#입출입시스템', '#출입관리', '#3D', '#ASAP', '#PC'],
  },
  {
    no: '05.',
    route: '/work/daewoong',
    title: '대웅제약 브랜드 홈페이지',
    subtitle: 'DAEWOONG PHARMACEUTICAL CENTER HOMEPAGE',
    tags: ['#브랜드홈페이지', '#STORYTELLING', '#UI UX DESIGN', '#RESPONSIVE'],
  },
  {
    no: '06.',
    route: '/work/daewoong-bio',
    title: '대웅바이오 브랜드 홈페이지',
    subtitle: 'DAEWOONG BIO BRAND HOMEPAGE',
    tags: ['#대웅바이오', '#글래스모피즘', '#3D', '#ASAP', '#ADAPTIVE'],
  },
  {
    no: '07.',
    route: '/work/lg-dno',
    title: 'LG D&O K-Hub 사내 지식·협업 플랫폼',
    subtitle: 'LG D&O KNOWLEDGE AND COLLABORATION PLATFORM',
    tags: ['#디자인총괄', '#지식공유', '#ATOMIC DESIGN', '#PC', '#ADMIN'],
  },
  {
    no: '08.',
    route: '/work/p-ket',
    title: 'P:KET 인플루언서 마케팅 어플리케이션',
    subtitle: 'P:KET INFLUENCER MARKETING APPLICATIONS',
    tags: ['#어플리케이션 개발', '#디자인총괄', '#기획총괄', '#개발관리', '#MOBILE'],
  },
];
const figmaFileUrl = 'https://www.figma.com/design/gKEOORSDrssOmvK9MuB306/PortFolio';
const withFigmaUrl = (page) => ({
  ...page,
  figmaUrl: page.figmaUrl ?? `${figmaFileUrl}?node-id=${page.nodeId.replace(':', '-')}&m=dev`,
});
const daewoongPrototypeModal = {
  closeSrc: '/work-pages/daewoong-modal-close.svg',
  items: [
    {
      triggerBox: { left: '46.753472%', top: '24.722222%', width: '7.083333%', height: '0.58642%' },
      videoSrc: '/work-pages/daewoong-prototype-a.mp4',
      title: '대웅제약 A안',
    },
    {
      triggerBox: { left: '65.538194%', top: '24.722222%', width: '7.083333%', height: '0.58642%' },
      videoSrc: '/work-pages/daewoong-prototype-b.mp4',
      title: '대웅제약 B안',
    },
    {
      triggerBox: { left: '84.322917%', top: '24.722222%', width: '7.083333%', height: '0.58642%' },
      videoSrc: '/work-pages/daewoong-prototype-c.mp4',
      title: '대웅제약 C안',
    },
  ],
};
const daewoongBioPrototypeModal = {
  closeSrc: '/work-pages/daewoong-modal-close.svg',
  items: [
    {
      triggerBox: { left: '74.661458%', top: '19.298942%', width: '7.083333%', height: '0.502646%' },
      videoSrc: '/work-pages/daewoong-bio-prototype-a.mp4',
      title: '대웅바이오 A안',
    },
  ],
};
const workFramePages = [
  { slug: 'busan', row: 'b', name: '부산광역시 생활지도', nodeId: '346:2466', src: '/work-pages/b-full.png', isFullFrame: true },
  { slug: 'seoul-arisu', row: 'c', name: '서울아리수', nodeId: '346:2467', src: '/work-pages/c-full.png', isFullFrame: true },
  { slug: 'hanwha', row: 'd', name: '한화 보훈 캠페인', nodeId: '346:2468', src: '/work-pages/d-full.png', isFullFrame: true },
  { slug: 'merck-korea', row: 'e', name: '머크코리아', nodeId: '346:2469', src: '/work-pages/e-full.png', isFullFrame: true },
  { slug: 'daewoong', row: 'f', name: '대웅제약', nodeId: '346:2470', src: '/work-pages/f-full.png', isFullFrame: true, prototypeModal: daewoongPrototypeModal },
  { slug: 'daewoong-bio', row: 'g', name: '대웅바이오', nodeId: '346:2471', src: '/work-pages/g-full.png', isFullFrame: true, prototypeModal: daewoongBioPrototypeModal },
  { slug: 'lg-dno', row: 'h', name: 'LG D&O', nodeId: '346:2472', src: '/work-pages/h-full.png', isFullFrame: true },
  { slug: 'p-ket', row: 'i', name: 'P:KET', nodeId: '346:2473', src: '/work-pages/i-full.png', isFullFrame: true },
].map(withFigmaUrl);
const workPages = [
  { row: 'b', name: 'B-01', slug: 'b-01', nodeId: '248:5117', src: '/work-pages/b-01.png' },
  { row: 'b', name: 'B-02', slug: 'b-02', nodeId: '248:5002', src: '/work-pages/b-02.png' },
  { row: 'b', name: 'B-03', slug: 'b-03', nodeId: '248:5675', src: '/work-pages/b-03.png' },
  { row: 'b', name: 'B-04', slug: 'b-04', nodeId: '248:5247', src: '/work-pages/b-04.png' },
  { row: 'b', name: 'B-05', slug: 'b-05', nodeId: '258:7791', src: '/work-pages/b-05.png' },
  { row: 'b', name: 'B-06', slug: 'b-06', nodeId: '259:8182', src: '/work-pages/b-06-a.png' },
  { row: 'b', name: 'B-06 detail', slug: 'b-06-2', nodeId: '260:8539', src: '/work-pages/b-06-b.png' },
  { row: 'c', name: 'C-01', slug: 'c-01', nodeId: '1:17015', src: '/work-pages/c-01.png' },
  { row: 'c', name: 'C-02', slug: 'c-02', nodeId: '1:17120', src: '/work-pages/c-02.png' },
  { row: 'c', name: 'C-03', slug: 'c-03', nodeId: '182:12021', src: '/work-pages/c-03.png' },
  { row: 'c', name: 'C-04', slug: 'c-04', nodeId: '3:4886', src: '/work-pages/c-04.png' },
  { row: 'c', name: 'C-05', slug: 'c-05', nodeId: '2:4669', src: '/work-pages/c-05.png' },
  { row: 'd', name: 'D-01', slug: 'd-01', nodeId: '180:7351', src: '/work-pages/d-01.png', linkBox: { left: '28.958333%', top: '58.611111%' } },
  { row: 'd', name: 'D-02', slug: 'd-02', nodeId: '194:9590', src: '/work-pages/d-02.png' },
  { row: 'd', name: 'D-03', slug: 'd-03', nodeId: '194:9692', src: '/work-pages/d-03.png' },
  { row: 'd', name: 'D-04', slug: 'd-04', nodeId: '195:9772', src: '/work-pages/d-04.png' },
  { row: 'e', name: 'E-01', slug: 'e-01', nodeId: '57:4998', src: '/work-pages/e-01.png' },
  { row: 'e', name: 'E-02', slug: 'e-02', nodeId: '261:11426', src: '/work-pages/e-02-a.png' },
  { row: 'e', name: 'E-02 detail', slug: 'e-02-2', nodeId: '58:1534', src: '/work-pages/e-02-b.png' },
  { row: 'e', name: 'E-03', slug: 'e-03', nodeId: '71:6202', src: '/work-pages/e-03.png' },
  { row: 'e', name: 'E-04', slug: 'e-04', nodeId: '71:6251', src: '/work-pages/e-04.png' },
  { row: 'f', name: 'F-01', slug: 'f-01', nodeId: '180:7406', src: '/work-pages/f-01.png' },
  { row: 'f', name: 'F-02', slug: 'f-02', nodeId: '261:13103', src: '/work-pages/f-02.png' },
  { row: 'f', name: 'F-03', slug: 'f-03', nodeId: '189:13458', src: '/work-pages/f-03.png' },
  { row: 'f', name: 'F-04', slug: 'f-04', nodeId: '192:13697', src: '/work-pages/f-04.png' },
  { row: 'f', name: 'F-05', slug: 'f-05', nodeId: '192:13780', src: '/work-pages/f-05.png' },
  {
    row: 'g',
    name: 'G-01',
    slug: 'g-01',
    nodeId: '1:18242',
    src: '/work-pages/g-01.png',
    figmaUrl: `${figmaFileUrl}?node-id=1%3A18242&m=dev`,
  },
  { row: 'g', name: 'G-02', slug: 'g-02', nodeId: '261:12417', src: '/work-pages/g-02.png' },
  { row: 'g', name: 'G-03', slug: 'g-03', nodeId: '182:12980', src: '/work-pages/g-03.png' },
  { row: 'g', name: 'G-04', slug: 'g-04', nodeId: '1:18328', src: '/work-pages/g-04.png' },
  { row: 'g', name: 'G-05', slug: 'g-05', nodeId: '24:5517', src: '/work-pages/g-05.png' },
  { row: 'h', name: 'H-01', slug: 'h-01', nodeId: '1:18699', src: '/work-pages/h-01.png' },
  { row: 'h', name: 'H-02', slug: 'h-02', nodeId: '261:11598', src: '/work-pages/h-02.png' },
  { row: 'h', name: 'H-03', slug: 'h-03', nodeId: '1:19039', src: '/work-pages/h-03.png' },
  { row: 'h', name: 'H-04', slug: 'h-04', nodeId: '40:4747', src: '/work-pages/h-04.png' },
  { row: 'h', name: 'H-05', slug: 'h-05', nodeId: '37:8348', src: '/work-pages/h-05.png' },
  { row: 'h', name: 'H-06', slug: 'h-06', nodeId: '194:9565', src: '/work-pages/h-06.png' },
  {
    row: 'i',
    name: 'I-01',
    slug: 'i-01',
    nodeId: '1:7144',
    src: '/work-pages/i-01.png',
    figmaUrl: `${figmaFileUrl}?node-id=1%3A7144&m=dev`,
    linkBox: { left: '30.052083%', top: '78.888889%' },
  },
  { row: 'i', name: 'I-02', slug: 'i-02', nodeId: '1:7179', src: '/work-pages/i-02.png' },
  { row: 'i', name: 'I-03', slug: 'i-03', nodeId: '174:11132', src: '/work-pages/i-03.png' },
  { row: 'i', name: 'I-04', slug: 'i-04', nodeId: '177:9570', src: '/work-pages/i-04.png' },
  { row: 'i', name: 'I-05', slug: 'i-05', nodeId: '166:10664', src: '/work-pages/i-05.png' },
  { row: 'i', name: 'I-06', slug: 'i-06', nodeId: '42:4888', src: '/work-pages/i-06.png' },
  { row: 'i', name: 'I-07', slug: 'i-07', nodeId: '178:4704', src: '/work-pages/i-07.png' },
  { row: 'i', name: 'I-08', slug: 'i-08', nodeId: '179:6085', src: '/work-pages/i-08.png' },
  { row: 'i', name: 'I-09', slug: 'i-09', nodeId: '42:8957', src: '/work-pages/i-09.png' },
  { row: 'i', name: 'I-10', slug: 'i-10', nodeId: '44:11213', src: '/work-pages/i-10.png' },
].map(withFigmaUrl);
const process = [
  {
    no: '01',
    eyebrow: '문제를 명확하게 정의합니다',
    title: 'FRAME THE PROBLEM',
    body: '복잡한 요구사항과 사업 내용을 분석해\n해결해야 할 핵심 문제와 목표를 설정합니다.',
  },
  {
    no: '02',
    eyebrow: '정보와 경험의 흐름을 설계합니다',
    title: 'STRUCTURE THE FLOW',
    body: '정보 위계와 사용자 동선을 정리해\n기능과 콘텐츠가 자연스럽게 이어지도록 구성합니다.',
  },
  {
    no: '03',
    eyebrow: '복잡한 내용을 시각 언어로 전환합니다.',
    title: 'VISUALIZE THE LOGIC',
    body: '정보와 기능의 관계를 UI, 다이어그램,\n브랜드 그래픽으로 명확하게 표현합니다.',
  },
  {
    no: '04',
    eyebrow: 'AI로 탐색과 실행을 가속합니다.',
    title: 'ACCELERATE THE PROCESS',
    body: 'AI 이미지·영상, 프로토타이핑과 퍼블리싱을 활용해\n아이디어를 빠르게 검토 가능한 결과로 만듭니다.',
  },
  {
    no: '05',
    eyebrow: '일관된 기준으로 결과를 완성합니다.',
    title: 'KEEP THE STANDARD',
    body: '사용성·일관성·확장성과 구현 가능성을 검토해\n속도 속에서도 결과물의 완성도를 유지합니다.',
  },
];

function Background({ section = 'start' }) {
  return (
    <div className="background" aria-hidden="true">
      <div className="black-fill" />
      <div className={`photo photo-${section}`}>
        <img src={backgroundAsset} alt="" />
        <div className="grain" />
        <div className={`fade fade-${section}`} />
        {section === 'start' ? <div className="intro-gradient" /> : null}
        {section === 'personal' ? <div className="personal-gradient" /> : null}
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="section intro-section" data-node-id="276:2469" aria-label="One Flow intro">
      <Background />
      <div className="flow-title" data-node-id="276:2473" aria-label="One Flow">
        <img src="/flow-outline.svg" alt="One Flow" />
      </div>
      <div className="standard-title" data-node-id="276:2476" aria-label="One Standard">
        <div className="standard-one">
          <img className="standard-one-union" src="/one-union.svg" alt="One" />
          <img className="standard-one-star" src="/one-cross-icon.svg" alt="" />
        </div>
        <img className="standard-word" src="/standard-vector.svg" alt="Standard" />
      </div>
      <div className="tagline" aria-label="Fast in flow. Keep the standard.">
        <p data-node-id="276:2487">Fast in flow</p>
        <span className="divider" data-node-id="276:2490">
          <img src={lineAsset} alt="" />
        </span>
        <p className="subheader" data-node-id="276:2488">Keep the standard.</p>
      </div>
    </section>
  );
}

function LogoLockup() {
  return (
    <div className="personal-logo" aria-label="One Flow Standard">
      <div className="personal-logo-row">
        <span className="personal-one">
          <img className="personal-one-word" src="/personal-one-word-figma.svg" alt="One" />
          <img className="personal-one-cross" src="/personal-one-star-figma.svg" alt="" />
        </span>
        <span className="personal-flow">
          <img src="/personal-flow-figma.svg" alt="Flow" />
        </span>
      </div>
      <div className="personal-standard" aria-label="Standard">
        <img className="personal-standard-sta" src="/personal-standard-sta-figma.svg" alt="" />
        <img className="personal-standard-ndard" src="/personal-standard-ndard-figma.svg" alt="" />
      </div>
    </div>
  );
}

function TagGroup({ title, items, className = '' }) {
  return (
    <div className={`tag-group ${className}`}>
      <h3>{title}</h3>
      <div className="chips">
        {items.map((item) => <span className="chip" key={item}>{item}</span>)}
      </div>
    </div>
  );
}

function ProcessItem({ item, index }) {
  return (
    <article className="process-item" style={{ '--i': index }}>
      <div className="process-no">{item.no} -</div>
      <div className="process-copy">
        <p className="process-eyebrow">{item.eyebrow}</p>
        <h3>{item.title}</h3>
        <p className="process-body">{item.body}</p>
      </div>
    </article>
  );
}

function PersonalSection() {
  return (
    <section id="personal" className="section personal-section" data-node-id="276:2491" aria-label="Personal profile">
      <Background section="personal" />
      <div className="personal-left">
        <LogoLockup />
        <div className="personal-subcopy">
          <p>AI로 실행의 흐름을 단축하며,</p>
          <p>디자인 기준으로 결과를 완성합니다.</p>
        </div>
        <div className="personal-description">
          <p>UI/UX를 중심으로 브랜딩, 편집디자인, 디지털 콘텐츠 등</p>
          <p>다양한 영역을 경험했습니다</p>
          <br />
          <p>AI와 새로운 도구를 활용해 반복 업무는 줄이고,</p>
          <p>사용성과 완성도를 결정하는 핵심 문제에 집중합니다.</p>
        </div>
        <div className="personal-tags">
          <TagGroup title="EXPERTISE" items={expertise} className="tag-expertise" />
          <TagGroup title="AI WORKFLOW" items={workflows} className="tag-workflow" />
          <TagGroup title="TOOLS" items={tools} className="tag-tools" />
        </div>
      </div>
      <div className="personal-process">
        {process.map((item, index) => <ProcessItem item={item} index={index} key={item.no} />)}
      </div>
    </section>
  );
}

function ChapterCard({ card, position }) {
  const renderBody = () => {
    if (!card.bodyStrong || !card.body.startsWith(card.bodyStrong)) return card.body;
    return (
      <>
        <strong>{card.bodyStrong}</strong>
        {card.body.slice(card.bodyStrong.length)}
      </>
    );
  };

  return (
    <article className={`chapter-card chapter-card-${card.logoKey} ${position}`}>
      <div className="chapter-card-media">
        <div className="chapter-meta">
          <span>{card.project}</span>
          <span>/</span>
          <span>{card.year}</span>
        </div>
        <div className={`chapter-logo chapter-logo-${card.logoKey}`}>
          {card.logoKey === 'busan' ? (
            <>
              <img className="busan-mark" src="/chapter-logo-08.svg" alt="" />
              <img className="busan-mark-shade" src="/chapter-logo-07.svg" alt="" />
              <img className="busan-kor" src="/chapter-logo-06.svg" alt="" />
              <img className="busan-eng" src="/chapter-logo-04.svg" alt="" />
              <span className="sr-only">{card.logo}</span>
            </>
          ) : card.logoAsset ? <img src={card.logoAsset} alt={card.logo} /> : <span>{card.logo}</span>}
        </div>
      </div>
      <div className="chapter-card-body">
        <div>
          <h3>{card.title}</h3>
          <p className="chapter-subtitle">{card.subtitle}</p>
        </div>
        <p className="chapter-desc">{renderBody()}</p>
        <div className="chapter-service">
          <strong>{card.service}</strong>
          <p>{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</p>
        </div>
      </div>
    </article>
  );
}

function BoardProjectRow({ project }) {
  return (
    <article className="board-row">
      <div className="board-row-main">
        <div className="board-no">{project.no}</div>
        <div className="board-text">
          <h3>{project.title}</h3>
          <p className="board-subtitle">{project.subtitle}</p>
          <div className="board-tags">
            {project.tags.map((tag) => <span className="board-tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
      <a className="board-arrow" href={project.route} aria-label={`${project.title} 보기`}>↗</a>
    </article>
  );
}

function BoardView() {
  const left = boardProjects.slice(0, 4);
  const right = boardProjects.slice(4);

  return (
    <div className="board-view" data-node-id="276:2833">
      <div className="board-column">
        {left.map((project) => <BoardProjectRow project={project} key={project.no} />)}
      </div>
      <div className="board-column">
        {right.map((project) => <BoardProjectRow project={project} key={project.no} />)}
      </div>
    </div>
  );
}

function CategoryCardSection() {
  const [view, setView] = useState(() => new URLSearchParams(window.location.search).get('view') === 'card' ? 'card' : 'board');
  const cardCount = chapterCards.length;
  const [activeCard, setActiveCard] = useState(() => {
    const initialCard = Number.parseInt(new URLSearchParams(window.location.search).get('card') ?? '0', 10);
    return Number.isFinite(initialCard) ? Math.min(Math.max(initialCard, 0), cardCount - 1) : 0;
  });
  const [enteringCard, setEnteringCard] = useState(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const previousCard = () => setActiveCard((current) => {
    setEnteringCard((current - 4 + cardCount) % cardCount);
    return (current - 1 + cardCount) % cardCount;
  });
  const nextCard = () => setActiveCard((current) => {
    setEnteringCard((current + 4) % cardCount);
    return (current + 1) % cardCount;
  });
  const progressOffset = cardCount > 1 ? activeCard / (cardCount - 1) : 0;
  const cardPosition = (index) => {
    let offset = index - activeCard;
    if (offset > cardCount / 2) offset -= cardCount;
    if (offset < -cardCount / 2) offset += cardCount;
    if (offset === 0) return 'center';
    if (offset === -1) return 'left-inner';
    if (offset === -2) return 'left-near';
    if (offset === -3) return 'left-far';
    if (offset === 1) return 'right-inner';
    if (offset === 2) return 'right-near';
    if (offset === 3) return 'right-far';
    return 'hidden';
  };

  useEffect(() => {
    if (enteringCard === null) return undefined;
    const timer = window.setTimeout(() => setEnteringCard(null), 760);
    return () => window.clearTimeout(timer);
  }, [enteringCard]);

  useEffect(() => {
    if (view !== 'card' || isCarouselPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveCard((current) => {
        setEnteringCard((current + 4) % cardCount);
        return (current + 1) % cardCount;
      });
    }, 3000);
    return () => window.clearInterval(timer);
  }, [cardCount, isCarouselPaused, view]);

  return (
    <section id="chapters" className="section category-section" data-node-id="276:2585" aria-label="Chapters card view">
      <Background section="category" />
      <div className="category-gradient" />
      <h2 className="chapters-title">
        <img src="/chapters-title-image.svg" alt="Chapters" />
      </h2>
      <div className="view-toggle" aria-label="View mode">
        <button className={view === 'board' ? 'active' : ''} type="button" onClick={() => setView('board')}><span aria-hidden="true">▦</span>Board view</button>
        <button className={view === 'card' ? 'active' : ''} type="button" onClick={() => setView('card')}><span aria-hidden="true">•••</span>Card view</button>
      </div>
      {view === 'card' ? (
        <>
          <div
            className="chapter-stage"
            data-node-id="276:2606"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onFocus={() => setIsCarouselPaused(true)}
            onBlur={() => setIsCarouselPaused(false)}
          >
            {chapterCards.map((card, index) => (
              <ChapterCard
                card={card}
                position={`${cardPosition(index)} ${enteringCard === index ? 'edge-entering' : ''}`}
                key={card.title}
              />
            ))}
          </div>
          <div className="chapter-nav">
            <button type="button" onClick={previousCard} aria-label="Previous project"><img src="/chapter-arrow-prev.svg" alt="" /></button>
            <div className="chapter-progress" aria-hidden="true"><span style={{ '--progress': progressOffset }} /></div>
            <button className="next" type="button" onClick={nextCard} aria-label="Next project"><img src="/chapter-arrow-next.svg" alt="" /></button>
          </div>
        </>
      ) : <BoardView />}
    </section>
  );
}

function WorkRoutePage({ pages, title }) {
  const isFullFrame = pages.length === 1 && pages[0].isFullFrame;
  const [prototypeModal, setPrototypeModal] = useState(null);
  const [isPrototypeHovered, setIsPrototypeHovered] = useState(false);

  const closePrototypeModal = () => {
    setPrototypeModal(null);
    setIsPrototypeHovered(false);
  };

  useEffect(() => {
    if (!prototypeModal) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closePrototypeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prototypeModal]);

  return (
    <main className={`work-route ${isFullFrame ? 'work-route-full' : ''}`} aria-label={`${title.toUpperCase()} portfolio detail`}>
      {pages.map((page, index) => (
        <section className={`work-section ${page.isFullFrame ? 'work-section-full' : ''}`} aria-label={page.name} key={page.slug ?? page.row}>
          <div className={`work-frame ${page.isFullFrame ? 'work-frame-full' : ''}`}>
            <img src={page.src} alt={`${page.name} portfolio page`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
            {page.prototypeModal?.items?.map((item) => (
              <button
                className="work-prototype-trigger"
                type="button"
                aria-label={`${item.title} prototype modal open`}
                onClick={() => setPrototypeModal({ ...page.prototypeModal, ...item })}
                style={item.triggerBox}
                key={item.videoSrc}
              />
            ))}
            {!page.isFullFrame ? (
              <a
                className="work-figma-link"
                href={page.figmaUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${page.name} Figma Link`}
                style={page.linkBox ?? undefined}
              />
            ) : null}
          </div>
        </section>
      ))}
      {prototypeModal ? (
        <div className="prototype-backdrop" role="presentation" onMouseDown={closePrototypeModal}>
          <div
            className={`prototype-modal ${isPrototypeHovered ? 'is-hovered' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label={`${prototypeModal.title} prototype video`}
            onMouseDown={(event) => event.stopPropagation()}
            onMouseEnter={() => setIsPrototypeHovered(true)}
            onMouseLeave={() => setIsPrototypeHovered(false)}
          >
            <video
              className="prototype-video-frame"
              src={prototypeModal.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              controls
              aria-label={`${prototypeModal.title} prototype video`}
            />
            {isPrototypeHovered ? (
              <div className="prototype-modal-header">
                <p>{prototypeModal.title}</p>
                <button type="button" onClick={closePrototypeModal} aria-label="Close prototype modal">
                  <img src={prototypeModal.closeSrc} alt="" />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    if (!sections.length) return undefined;
    if (window.location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView();
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.classList.contains('has-played')) return;
          entry.target.classList.add('in-view', 'has-played');
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const workMatch = path.match(/^\/work\/([a-z0-9-]+)$/);
  if (workMatch) {
    const routeSlug = workMatch[1];
    const pages = workFramePages.filter((page) => page.slug === routeSlug)
      .concat(workPages.filter((page) => page.slug === routeSlug));
    if (pages.length) return <WorkRoutePage pages={pages} title={routeSlug} />;
  }

  return (
    <main className="home-main">
      <IntroSection />
      <PersonalSection />
      <CategoryCardSection />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
