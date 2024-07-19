import React, { useState, useEffect } from "react";
import { Table, Input, Button } from "antd";
import { useRouter } from "next/navigation";

const { Search } = Input;

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetch(
      `http://universities.hipolabs.com/search?country=indonesia&name=universitas`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase()) &&
        item.country.toLowerCase().includes(searchCountry.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleLogout = () => {
    // Hapus sesi login di sini jika diperlukan
    router.push("/");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Website",
      dataIndex: "web_pages",
      key: "web_pages",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <Search
            placeholder="Search by name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            onSearch={handleSearch}
            style={{ width: 200, marginRight: "10px" }}
          />
          <Search
            placeholder="Search by country"
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
            onSearch={handleSearch}
            style={{ width: 200, marginRight: "10px" }}
          />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        loading={loading}
        rowKey="name"
      />
    </div>
  );
};

export default Dashboard;
