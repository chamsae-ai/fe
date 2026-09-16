import { Sparrow } from '../../components/Sparrow'
import * as styles from './ResultSparrow.css'

/**
 * 분석하는 동안의 참새다. 왼쪽에서 오른쪽으로 지나가며 얕게 뜨고 날개를 젓는다.
 *
 * 제목 줄 안에 둔다. 제목이 줄바꿈되어도 마지막 줄을 따라간다. 위에 따로
 * 두면 제목과 떨어져 무엇에 대한 표식인지 흐려진다.
 *
 * 진행률 막대와 단계 칸이 이미 남은 양을 말한다. 여기서는 아직 돌고 있다는
 * 것만 전한다. 크게 움직이면 읽는 것을 방해한다.
 *
 * 움직임을 줄이도록 설정한 기기에서는 멈춘 표식만 남는다.
 */
export function FlyingSparrow() {
  return (
    <span className={styles.path} aria-hidden>
      <span className={styles.flying}>
        <Sparrow size={32} flying wingClassName={styles.wing} />
      </span>
    </span>
  )
}

/** 분석을 마친 참새다. 부리에 쪽지를 물고 있고 움직이지 않는다. */
export function PerchedSparrow() {
  return (
    <span className={styles.perched} aria-hidden>
      <Sparrow size={32} carrying />
    </span>
  )
}
