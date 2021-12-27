import "./App.css";
import React, { useState } from "react";
import QuoteBar from "./components/QuoteBar";
import CompanyProfile from "./components/CompanyProfile";
import Peers from "./components/Peers";
import CompanyNewsList from "./components/CompanyNewsList";
import { useEffect } from "react/cjs/react.development";
import { timeConverter } from "./helper/functions";

function App() {
  const finnhub = require("finnhub");
  const [quotePrices, setQuotePrices] = useState({});
  const [companyProfile, setCompanyProfile] = useState({});
  const [quoteName, setQuoteName] = useState("");
  const [peers, setPeers] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  //Authentication of finnhub API
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = "c71qqrqad3ieuiu4esvg";
  const finnhubClient = new finnhub.DefaultApi();

  //define function to fetch news, company profile, peers, and quote prices end points
  const fetchData = () => {
    //set loding state true
    setLoading(true);
    finnhubClient.quote(quoteName.toUpperCase(), (error, data) => {
      if (error) return console.log(error);
      //set current, low and high Quote prices
      setQuotePrices({ current: data.c, high: data.h, low: data.l });
      finnhubClient.companyProfile2(
        { symbol: quoteName.toUpperCase() },
        (error, data) => {
          setCompanyProfile({
            logo: data.logo,
            name: data.name,
            weburl: data.weburl,
            phone: data.phone,
            marketcap: data.marketCapitalization,
            shareOutstanding: data.shareOutstanding,
            ticker: data.ticker,
            industry: data.finnhubIndustry,
          });
        }
      );
      finnhubClient.companyPeers(quoteName.toUpperCase(), (error, data) => {
        //select first 5 peers
        setPeers(data.splice(0, 5));
      });
      finnhubClient.companyNews(
        quoteName.toUpperCase(),
        "2021-10-01",
        "2022-03-30",
        (error, data) => {
          if (error) {
            console.log(error);
          } else {
            //select first 3 news objects
            let selectedNews = data.slice(0, 3);
            let fixedSelectedNews = selectedNews.map((story) => ({
              image: story.image,
              id: story.id,
              date: timeConverter(story.datetime),
              summary: story.summary,
              url: story.url,
              source: story.source,
            }));
            setNews(fixedSelectedNews);
            //set loading state false
            setLoading(false);
          }
        }
      );
    });
  };

  useEffect(() => {
    const timeOutId = setTimeout(fetchData, 3000);
    return () => clearTimeout(timeOutId);
  }, [quoteName]);

  return (
    <div>
      <QuoteBar
        setQuoteName={setQuoteName}
        quotePrices={quotePrices}
        quoteName={quoteName}
      />
      {isLoading && news.length === 0 ? (
        <h3 class='loader'>Loading .... </h3>
      ) : companyProfile.ticker === undefined ? (
        <h3 className='loader'>ticker not found</h3>
      ) : (
        <div className='App'>
          <div className='company-peers'>
            <CompanyProfile companyProfile={companyProfile} />
            <Peers peers={peers} setQuoteName={setQuoteName} />
          </div>

          <CompanyNewsList news={news} />
        </div>
      )}
    </div>
  );
}

export default App;
