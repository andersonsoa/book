interface Props {
  params: {
    id: number;
  };
}

export default function BookmarkDetail(props: Props) {
  return (
    <>
      <h1>detail {props.params.id}</h1>
    </>
  );
}
