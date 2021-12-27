import React from "react";
import "../styles/CompanyProfile.css";
import { reshapePhoneNum } from "../helper/functions";

const CompanyProfile = ({ companyProfile }) => {
  return (
    <div className='company-profile'>
      <div className='top-cover'>
        <div className='left-profile'>
          <div className='logo-name'>
            {companyProfile.logo !== "" ? (
              <img src={companyProfile.logo} alt='logo' />
            ) : (
              <img src='http://via.placeholder.com/640x360' />
            )}

            <h3>
              {/* show first 20 charecters of the company name */}
              {companyProfile.name.length > 20
                ? companyProfile.name.substring(0, 20) + "..."
                : companyProfile.name}
            </h3>
          </div>
          <p>{companyProfile.weburl}</p>
          <p>{reshapePhoneNum(companyProfile.phone)}</p>
        </div>
        <div className='right-profile'>
          <h2>{companyProfile.ticker}</h2>
        </div>
      </div>
      <div className='general-info-cover'>
        <div className='general-info'>
          <span>marketcap</span>{" "}
          {!companyProfile.marketcap ? (
            <span>---</span>
          ) : (
            <span>{companyProfile.marketcap}</span>
          )}
          {console.log(companyProfile.marketcap)}
        </div>
        <div className='general-info'>
          <span>share outstanding</span>{" "}
          {!companyProfile.shareOutstanding ? (
            <span>---</span>
          ) : (
            <span>{companyProfile.shareOutstanding}</span>
          )}
        </div>
        <div className='general-info'>
          <span>industry</span>{" "}
          {!companyProfile.industry ? (
            <span>---</span>
          ) : (
            <span>{companyProfile.industry}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
