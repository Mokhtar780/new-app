



 function CardHomePag({ myName, theme }: { myName: boolean ;theme:string}) {
  return (
    <>
      <div className={` card  ${
                theme == "dark" ? "myDark" : "myLight"
              }
             
            `}>
        <div className="card-header header-elements">
          <h5 className="card-title mb-0">💖</h5>
          <div className="card-header-elements ms-auto py-0 dropdown">
            <button
              type="button"
              className="btn dropdown-toggle hide-arrow p-0"
              id="heat-chart-dd"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bx bx-dots-vertical-rounded"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="heat-chart-dd"
            >
              <a className="dropdown-item" href="javascript:void(0);"></a>
            </div>
          </div>
        </div>
        <div className="card-body">{myName ? "  أهلاً وسهلاً بك عزيزي المستخدم  " : " Welcome dear user "}</div>
      </div>
    </>
  );
};

export default CardHomePag;
