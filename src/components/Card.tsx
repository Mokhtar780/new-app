import { ReactNode } from "react";



const Card = ({title,children}:{title:string,children:ReactNode}) =>{

    return (
        <>
           <div className="card">
          <div className="card-header header-elements">
            <h5 className="card-title mb-0"> 
              {children}
               </h5>
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
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="heat-chart-dd">
                <a className="dropdown-item" href="javascript:void(0);"> {title }</a>
              </div>
            </div>
          </div>
          <div className="card-body">
            
            Hello Babys
          </div>
        </div>
        </>
    );
}

export default Card;