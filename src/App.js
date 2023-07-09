import React, { useState, useRef } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import "./App.css";

function App() {
  const formRef = useRef(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRefreshClick = () => {
    formRef.current.reset();
    setStartDate(null);
    setEndDate(null);
  };
  return (
    <div className="App">
      <div className="job-detail-header-div">
        <h2 className="jobs-text job-detail-heading">Compare Documents</h2>
      </div>

      <form ref={formRef}>
        <div className="row">
          <div className="dropdown">
            <label htmlFor="cerDropdown">CER:</label>
            <br />
            <select id="cerDropdown" className="custom-dropdown">
              <option value="CERC">CERC</option>
              <option value="MoP">MoP</option>
              <option value="MNRE">MNRE</option>
              <option value="CEA">CEA</option>
              <option value="POSOCO">POSOCO</option>
              <option value="JERC(Goa&UTs)">JERC (Goa & UTs)</option>
              <option value="APERC">APERC</option>
              <option value="APSERC">APSERC</option>
              <option value="AERC">AERC</option>
              <option value="BERC">BERC</option>
              <option value="CSERC">CSERC</option>
              <option value="DERC">DERC</option>
              <option value="GERC">GERC</option>
              <option value="HERC">HERC</option>
              <option value="HPERC">HPERC</option>
              <option value="JKSERC">JKSERC</option>
              <option value="JSERC">JSERC</option>
              <option value="KERC">KERC</option>
              <option value="KSERC">KSERC</option>
              <option value="MPERC">MPERC</option>
              <option value="MERC">MERC</option>
              <option value="JERC(M&M)">JERC (M&M)</option>
              <option value="MSERC">MSERC</option>
              <option value="NERC">NERC</option>
              <option value="OERC">OERC</option>
              <option value="PSERC">PSERC</option>
              <option value="RERC">RERC</option>
              <option value="SSERC">SSERC</option>
              <option value="TNERC">TNERC</option>
              <option value="TSERC">TSERC</option>
              <option value="TERC">TERC</option>
              <option value="UPERC">UPERC</option>
              <option value="UERC">UERC</option>
              <option value="WBERC">WBERC</option>
              <option value="FOR">FOR</option>
              <option value="JERC(Goa&UTs)">JERC (Goa & UTs)</option>
              <option value="JERC(M&M)">JERC (M & M)</option>
              <option value="JERC(JK&L)">JERC (JK & L)</option>
              <option value="BEE">BEE</option>
              <option value="APTEL">APTEL</option>
              <option value="UPNEDA">UPNEDA</option>
              <option value="UREDA">UREDA</option>
              <option value="EAL,IITKanpur">EAL, IIT Kanpur</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="ercDropdown">ERC:</label>
            <br />
            <select id="ercDropdown" className="custom-dropdown">
              <option value="CERC">CERC</option>
              <option value="MoP">MoP</option>
              <option value="MNRE">MNRE</option>
              <option value="CEA">CEA</option>
              <option value="POSOCO">POSOCO</option>
              <option value="JERC(Goa&UTs)">JERC (Goa & UTs)</option>
              <option value="APERC">APERC</option>
              <option value="APSERC">APSERC</option>
              <option value="AERC">AERC</option>
              <option value="BERC">BERC</option>
              <option value="CSERC">CSERC</option>
              <option value="DERC">DERC</option>
              <option value="GERC">GERC</option>
              <option value="HERC">HERC</option>
              <option value="HPERC">HPERC</option>
              <option value="JKSERC">JKSERC</option>
              <option value="JSERC">JSERC</option>
              <option value="KERC">KERC</option>
              <option value="KSERC">KSERC</option>
              <option value="MPERC">MPERC</option>
              <option value="MERC">MERC</option>
              <option value="JERC(M&M)">JERC (M&M)</option>
              <option value="MSERC">MSERC</option>
              <option value="NERC">NERC</option>
              <option value="OERC">OERC</option>
              <option value="PSERC">PSERC</option>
              <option value="RERC">RERC</option>
              <option value="SSERC">SSERC</option>
              <option value="TNERC">TNERC</option>
              <option value="TSERC">TSERC</option>
              <option value="TERC">TERC</option>
              <option value="UPERC">UPERC</option>
              <option value="UERC">UERC</option>
              <option value="WBERC">WBERC</option>
              <option value="FOR">FOR</option>
              <option value="JERC(Goa&UTs)">JERC (Goa & UTs)</option>
              <option value="JERC(M&M)">JERC (M & M)</option>
              <option value="JERC(JK&L)">JERC (JK & L)</option>
              <option value="BEE">BEE</option>
              <option value="APTEL">APTEL</option>
              <option value="UPNEDA">UPNEDA</option>
              <option value="UREDA">UREDA</option>
              <option value="EAL,IITKanpur">EAL, IIT Kanpur</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="dropdown">
            <label htmlFor="categoryDropdown">Select Category</label>
            <br />
            <select id="categoryDropdown" className="custom-dropdown">
              <option value="act">Act</option>
              <option value="regulation">Regulation</option>
              <option value="rules">Rules</option>
              <option value="tariffOrder">Tariff Order</option>
              <option value="petition">Petition</option>
              <option value="order">Order</option>
              <option value="discussionPaper">Discussion Paper</option>
              <option value="staffPaper">Staff Paper</option>
              <option value="consultationPaper">Consultation Paper</option>
              <option value="studyReport">Study Report</option>
              <option value="marketMonitoringReport">
                Market Monitoring Report
              </option>
              <option value="guidelines">Guidelines</option>
              <option value="policy">Policy</option>
              <option value="conceptPaper">Concept Paper</option>
              <option value="supremeCourtOrder">Supreme Court Order</option>
              <option value="suoMotu">Suo-Motu</option>
              <option value="financialReport">Financial Report</option>
              <option value="annualReport">Annual Report</option>
              <option value="others">Others</option>
              <option value="newsletter">Newsletter</option>
              <option value="cerEalComments">CER/EAL Comments</option>{" "}
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="sectionDropdown">Select Section</label>
            <br />
            <select id="sectionDropdown" className="custom-dropdown">
              <option value="generation">Generation</option>
              <option value="transmission">Transmission</option>
              <option value="distribution">Distribution</option>
              <option value="renewable">Renewable</option>
              <option value="market">Market</option>
              <option value="openAccess">Open Access</option>
              <option value="consumer">Consumer</option>
              <option value="grid">Grid</option>
              <option value="powerPurchaseAgreement">
                Power Purchase Agreement
              </option>
              <option value="others">Others</option>
              <option value="powerSale">Power Sale</option>
              <option value="electricVehicle">Electric Vehicle</option>
              <option value="conductOfBusiness">Conduct of Business</option>
              <option value="solarPower">Solar Power</option>
              <option value="electricitySupplyCode">
                Electricity Supply Code
              </option>
              <option value="demandSideManagement">
                Demand Side Management
              </option>
              <option value="smartGrid">Smart Grid</option>
              <option value="fuelCostAdjustmentCharges">
                Fuel Cost Adjustment charges
              </option>
              <option value="SLDC">SLDC</option>
              <option value="consolidatedTariffOrder">
                Consolidated Tariff Order
              </option>
              <option value="tariffDetermination">Tariff Determination</option>
              <option value="deviationSettlementMechanism">
                Deviation Settlement Mechanism
              </option>
              <option value="feesCharges">Fees & Charges</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="dropdown">
            <label htmlFor="title-text">Title</label>
            <br />
            <input />
          </div>
          {/* <div className="dropdown">
          <label htmlFor="title-text">Type of Document</label>
          <br />
          <input />
        </div> */}
          <div className="dropdown">
            <label htmlFor="sectionDropdown">Type of Document</label>
            <br />
            <select id="sectionDropdown" className="custom-dropdown">
              <option value="draft">Draft</option>
              <option value="gazetteFinal">Gazette/Final</option>
              <option value="amendment">Amendment</option>
              <option value="corrigendum">Corrigendum/Erratum</option>
              <option value="addendum">Addendum</option>
              <option value="generalOrders">General Orders</option>
              <option value="miscellaneousOrders">Miscellaneous Orders</option>
              <option value="resolution">Resolution</option>
              <option value="notification">Notification</option>
              <option value="circular">Circular</option>
              <option value="petition">Petition</option>
              <option value="tariffOrder">Tariff Order/True-up</option>
              <option value="statementOfReasons">
                Statement of Reasons (SOR)
              </option>
              <option value="explanatoryMemorandum">
                Explanatory Memorandum (EM)
              </option>
              <option value="procedure">Procedure (PR)</option>
              <option value="blog">Blog</option>
              <option value="judgementOrder">Judgement/Order</option>{" "}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="dropdown">
            <label htmlFor="datePicker">Start Date:</label>
            <br />
            <Datetime
              id="startDatePicker"
              value={startDate}
              onChange={handleStartDateChange}
              inputProps={{
                readOnly: true,
              }}
              className="custom-datepicker"
            />
          </div>

          <div className="dropdown">
            <label htmlFor="datePicker">End Date:</label>
            <br />
            <Datetime
              id="endDatePicker"
              value={endDate}
              onChange={handleEndDateChange}
              inputProps={{
                readOnly: true,
              }}
              className="custom-datepicker"
            />
          </div>
        </div>

        {/* <div>
        <label htmlFor="datePicker">Date:</label>
        <Datetime
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div> */}

        <div className="row">
          <div className="dropdown">
            <button className="login-btn">Compare</button>
          </div>
          <div className="dropdown">
            <button
              className="login-btn"
              type="button"
              onClick={handleRefreshClick}
            >
              Refresh
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
