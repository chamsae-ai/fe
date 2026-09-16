import { style } from '@vanilla-extract/css'

import { media } from '../styles/breakpoints'
import { vars } from '../styles/contract.css'

export const bar = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  flexShrink: 0,
  height: '3.5rem',
  padding: `0 ${vars.space.lg}`,
  borderBottom: `${vars.borderWidth.thin} solid ${vars.color.border.subtle}`,
  '@media': {
    [media.desktop]: {
      height: '4rem',
      padding: `0 ${vars.space.xxl}`,
    },
  },
})

/**
 * 표식 옆 이름의 생김새다. 홈과 결과 화면이 같아야 해서 한 곳에서 정한다.
 *
 * 글자 크기는 값으로 박았다. 표식 크기에 맞춘 값이라 본문 크기 토큰 중에는
 * 쓸 만한 것이 없다.
 */
const brandBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space.xxs,
  fontSize: '1.25rem',
  lineHeight: 1.05,
  fontWeight: vars.font.weight.bold,
  letterSpacing: vars.font.letterSpacing.tight,
  color: vars.color.text.primary,
})

export const brand = style([brandBase, { textDecoration: 'none' }])

/** 이름 옆에 붙는 설명. 좁은 화면에서는 이름까지만 둔다. */
export const brandTagline = style({
  display: 'none',
  fontSize: vars.font.size.md,
  fontWeight: vars.font.weight.regular,
  letterSpacing: vars.font.letterSpacing.normal,
  color: vars.color.text.faint,
  '@media': {
    [media.desktop]: {
      display: 'inline',
      marginLeft: vars.space.xs,
    },
  },
})

/**
 * 가운데 표식을 진짜 가운데에 두려면 양옆이 같은 폭을 차지해야 한다. 내용
 * 길이가 달라도 가운데가 밀리지 않는다.
 */
export const side = style({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
})

export const sideEnd = style({
  justifyContent: 'flex-end',
})

export const centerBrand = style([brandBase, { flexShrink: 0 }])

/**
 * 붓 자국의 모양이다. 왼쪽에서 눌러 긋고 오른쪽으로 서서히 빼며, 양 끝은
 * 둥글게 맺는다. 색은 모양에서 떼어 두어야 계약의 색을 그대로 쓸 수 있다.
 * 그래서 그림을 마스크로 쓰고 색은 배경으로 준다.
 */
const BRUSH =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath d='M9 2C40 3 70 6 96 8.5A2.5 2.5 0 0 1 96 13.5C70 16 40 17 9 18A8 8 0 0 1 9 2Z'/%3E%3C/svg%3E\")"

/**
 * 결과 화면의 이름 밑에 긋는 붓 자국이다.
 *
 * 이 화면에서는 표식을 빼고 이름만 남긴다. 제목 옆 참새가 상태를 말하고
 * 있어서 같은 그림이 한 화면에 두 번 나온다.
 *
 * 홈의 강조와 같이 글자 뒤에 깔아 아랫부분에 겹친다. 반듯한 줄을 밑에 그으면
 * 누를 수 있는 것으로 보이는데 이 이름은 누르는 것이 아니다.
 */
export const brushUnderline = style({
  position: 'relative',
  display: 'inline-block',
  isolation: 'isolate',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      left: '-0.12em',
      right: '-0.14em',
      bottom: '-0.08em',
      height: '0.44em',
      zIndex: -1,
      backgroundColor: vars.color.brand.clay,
      maskImage: BRUSH,
      WebkitMaskImage: BRUSH,
      maskSize: '100% 100%',
      WebkitMaskSize: '100% 100%',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      transform: 'rotate(-1.4deg)',
    },
  },
})

export const actions = style({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
})

/** 나가는 길. 아이콘만 두되 누를 자리는 충분히 잡는다. */
export const back = style({
  display: 'inline-grid',
  placeItems: 'center',
  width: vars.layout.minTouchTarget,
  height: vars.layout.minTouchTarget,
  marginLeft: `calc(-1 * ${vars.space.sm})`,
  color: vars.color.text.primary,
})
