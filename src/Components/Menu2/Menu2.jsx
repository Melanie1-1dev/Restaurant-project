import React from "react";
import "./Menu2.css";
import {
  Search,
  Bell,
  User,
  PieChart,
  Settings,
  ArrowDown,
} from "lucide-react";

const Menu2 = () => {
  return (
    <div className="menuBubble">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div>
          <h2 className="logo">
            Miss<span>You</span>
          </h2>

          <div className="sidebar-links">
            <h3>Overview</h3>

            <div>
              <User size={18} />
              <span>Users</span>
            </div>

            <div>
              <PieChart size={18} />
              <span>Clients</span>
            </div>
          </div>
        </div>

        <div className="bottom-links">
          <div>
            <Settings size={18} />
            <span>Settings</span>
          </div>

          <div>
            <User size={18} />
            <span>My Account</span>
          </div>
        </div>
      </div>

      {/* MAIN */}

      <div className="main">

        {/* TOPBAR */}

        <div className="topbar">

          <div className="top-center">
            <p>Overview</p>
          </div>

          <div className="top-icons">
            <Search size={18} />
            <Bell size={18} />
            <User size={20} />
          </div>
        </div>

        {/* STATS */}

        <div className="stats">

          <div className="stat-card">
            <small>Clients</small>
            <h3>60</h3>
          </div>

          <div className="stat-card">
            <small>Revenue(FRWF)</small>
            <h3>38234000</h3>
          </div>

          <div className="stat-card">
            <small>Orders</small>
            <h3>67569</h3>
          </div>

        </div>

        {/* CHARTS */}

        <div className="charts">

          <div className="chart-box donut">
            <div className="circle"></div>
          </div>

          <div className="chart-box bars">

            <div className="bar-group">
              <div className="bar purple h1"></div>
              <div className="bar purple h2"></div>
              <div className="bar purple h3"></div>
              <div className="bar purple h4"></div>
              <div className="bar purple h5"></div>
            </div>

            <div className="bar-group">
              <div className="bar orange h2"></div>
              <div className="bar orange h3"></div>
              <div className="bar orange h4"></div>
              <div className="bar orange h5"></div>
              <div className="bar orange h2"></div>
            </div>

          </div>
        </div>

        {/* CARDS */}

        <div className="info-section">

          <div className="create-card">
            <button>Create</button>

            <div className="task">
              <p>Restaurants</p>
              <span>New</span>
            </div>

            <div className="task">
              <p>Hotels</p>
              <span>New</span>
            </div>

            <div className="task default">
              <p>Pub</p>
              <span>DEFAULT</span>
            </div>
          </div>

          <div className="details-card">
            <div className="card-header">
              <p>Restaurants</p>
              <span>View details</span>
            </div>

            <div className="detail-row">
              <p>Sales</p>
              <h5>300</h5>
            </div>

            <div className="detail-row">
              <p>Soy</p>
              <h5>12000</h5>
            </div>

            <div className="detail-row">
              <p>Pubs</p>
              <h5>150</h5>
            </div>
          </div>

          <div className="details-card">
            <div className="card-header">
              <p>Pubs</p>
              <span>View details</span>
            </div>

            <div className="detail-row">
              <p>Sales</p>
              <h5>300</h5>
            </div>

            <div className="detail-row">
              <p>Get N10</p>
              <h5>150</h5>
            </div>

            <div className="detail-row">
              <p>M Hotel</p>
              <h5>1005</h5>
            </div>
          </div>

        </div>

        {/* DOWN BUTTON */}

        <button className="down-btn">
          <ArrowDown size={22} />
        </button>

      </div>
    </div>
  );
};

export default Menu2;