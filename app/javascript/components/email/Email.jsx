import React, { useEffect } from "react";
import EmailCreate from "./EmailCreate";
import EmailList from "./EmailList";
import EmailBulk from "./EmailBulk";
import EmailBulkList from "./EmailBulkList";

const Email = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-6">
                    <EmailCreate />
                    <EmailBulk />
                </div>
                <div className="col-sm-6 col-6">
                    <img
                        className="d-block w-100"
                        src="/header_main-page.svg"
                    ></img>
                </div>
            </div>
                <div className="row">
                    <div className="col-sm-6 col-6">
                        <EmailBulkList />
                    </div>
                    <div className="col-sm-6 col-6">
                     <EmailList />
                    </div>
            </div>
        </div>
    );
};

export default Email;
