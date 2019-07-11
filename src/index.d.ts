declare namespace Taro {
  interface FunctionComponent<P = {}> {
    (props: Readonly<P>): JSX.Element
  }

  function memo<P = {}>(
    FunctionComponent: FunctionComponent<P>,
    compare?: (oldProps: P, newProps: P) => Boolean
  ): FunctionComponent<P>
}
