import { vars } from '../styles/contract.css'

/**
 * 참새 표식이다. 말풍선 윤곽에 눈 두 점과 부리를 얹어 새가 된다. 말풍선은
 * 우리가 다루는 것이 영상 속 발언이라는 뜻이다.
 *
 * 24px 격자의 선 아이콘(`components/icons`)과 성격이 다르다. 색이 둘이고
 * 크기별로 획 굵기를 따로 잡아야 해서 따로 둔다.
 *
 * `plain`은 파비콘처럼 작은 자리를 위한 단순형이다. 날개 획과 눈 하나를 빼고
 * 선을 굵혔다. 흰 몸에 검은 선이라는 표식의 성격은 그대로 둔다.
 *
 * `wingClassName`과 `carrying`은 결과 화면의 두 상태를 위한 것이다. 표식을
 * 새로 그리지 않고 같은 몸에 날개와 물고 있는 것만 얹는다. 다른 새처럼 보이면
 * 같은 서비스로 읽히지 않는다.
 */
/** 몸통 윤곽이다. 음영이 같은 선을 한 번 더 그려서 상수로 둔다. */
const BODY =
  'M60 14c-27 0-46 19-46 44 0 13 4 26 14 36l-8 16 22-9c6 2 12 3 18 3 27 0 46-19 46-46S87 14 60 14z'

export function Sparrow({
  size = 28,
  variant = 'full',
  label,
  wingClassName,
  flying = false,
  carrying = false,
}: {
  size?: number
  variant?: 'full' | 'plain'
  /** 화면에서 읽히는 이름. 없으면 장식으로 보고 낭독기에서 감춘다. */
  label?: string
  /** 펼친 날개에 붙일 클래스다. 부르는 쪽에서 움직임을 준다. */
  wingClassName?: string
  /** 몸 밖으로 날개를 펼친다. 표식 안쪽 획은 눈썹처럼 보여 나는 것으로 읽히지 않는다. */
  flying?: boolean
  /** 부리에 쪽지를 물린다. `full`에서만 그린다. */
  carrying?: boolean
}) {
  const decorative = label === undefined
  // 날개와 쪽지는 몸 밖으로 나간다. 원래 상자에는 그릴 자리가 없어 그때만
  // 좌우를 넓힌다. 새 자체의 크기는 그대로 둔다.
  const extended = variant === 'full' && (flying || carrying)
  const left = flying ? -38 : 0
  const right = carrying ? 150 : 120
  const box = `${left} 0 ${right - left} 120`
  const common = {
    width: extended ? Math.round((size * (right - left)) / 120) : size,
    height: size,
    viewBox: extended ? box : '0 0 120 120',
    role: decorative ? undefined : ('img' as const),
    'aria-hidden': decorative ? true : undefined,
    'aria-label': label,
  }

  if (variant === 'plain') {
    return (
      <svg {...common}>
        <path
          d="M58 22c-23 0-40 16-40 38 0 11 4 21 11 29l-7 15 19-8c5 2 11 3 17 3 23 0 40-16 40-39S81 22 58 22z"
          fill={vars.color.surface.raised}
          stroke="currentColor"
          strokeWidth={11}
          strokeLinejoin="round"
        />
        <circle cx="54" cy="56" r="8" fill="currentColor" />
        <path
          d="M92 52l22 8-22 9z"
          fill={vars.color.brand.beak}
          stroke="currentColor"
          strokeWidth={9}
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg {...common}>
      {/*
        펼친 날개다. 몸보다 먼저 그려 뒤로 보낸다. 앞에 두면 얼굴을 가린다.
        깃을 둘로 나눠야 깃털 하나가 아니라 날개로 읽힌다.
      */}
      {flying ? (
        <g
          className={wingClassName}
          fill={vars.color.surface.raised}
          stroke="currentColor"
          strokeWidth={6}
          strokeLinejoin="round"
          strokeLinecap="round"
        >
          <path
            transform="translate(4 0) rotate(-24 20 62)"
            d="M20 43C10 27-9 25-18 36-25 44-15 51-7 51-18 49-30 54-25 62-20 70-15 70-10 68-20 70-28 73-22 81-15 88 1 88 9 84 15 82 19 80 20 73Z"
          />
        </g>
      ) : null}

      {/*
        몸통 아래에 깔리는 갈색 음영이다. 같은 윤곽을 조금 내려 그려 아래쪽
        가장자리만 드러난다. 상자에 그림자를 주면 표식이 아니라 네모가 뜬다.
      */}
      <path
        d={BODY}
        transform="translate(0 5)"
        fill="none"
        stroke={vars.color.brand.clay}
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={BODY} fill={vars.color.surface.raised} />
        <path d="M22 60c10 0 14-14 24-16" />
      </g>
      <circle cx="70" cy="48" r="4.5" fill="currentColor" />
      <circle cx="46" cy="64" r="6" fill="currentColor" />
      <path
        d="M84 58l20 6-20 8z"
        fill={vars.color.brand.beak}
        stroke="currentColor"
        strokeWidth={5}
        strokeLinejoin="round"
      />
      {/* 물고 온 쪽지다. 결과 머리말이 "물어온"이라고 말하는 것을 그림으로 받는다. */}
      {carrying ? (
        <g stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
          <path d="M104 66l32-9 11 38-32 9z" fill={vars.color.surface.raised} strokeWidth={6} />
          <path d="M116 74l16-4" strokeWidth={4} />
          <path d="M120 86l16-4" strokeWidth={4} />
        </g>
      ) : null}
    </svg>
  )
}
