
function HeadTitle({title="무제", description="무설명", children}) { //값이 없을경우를 대비해서 매개변수에 기본값을 줄 수 있음
  return (
    <>
    <header>
        <h2>{title}</h2>
        <p>{description}</p>
    </header>
      <main>{children}</main>
      </>
  )
}

export default HeadTitle;