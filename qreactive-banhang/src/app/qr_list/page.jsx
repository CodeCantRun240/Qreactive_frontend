"use client";
// pages/qrList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import MyQR from "./MyQRCodes.module.css";
import { getEmailUser } from '@/components/emailuser';
import html2canvas from 'html2canvas'; 

function MyQRCodesContent() {
  // State to manage dropdown visibility
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [dropdown3Visible, setDropdown3Visible] = useState(false);
  const [dropdown4Visible, setDropdown4Visible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedCodes, setSelectedCodes] = useState([]);
  const [qrCodes, setQRCodes] = useState([]);
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  // Toggle dropdown function
  const toggleDropdown = (dropdownId) => {
    switch (dropdownId) {
      case "1":
        setDropdown1Visible(!dropdown1Visible);
        break;
      case "2":
        setDropdown2Visible(!dropdown2Visible);
        break;
      case "3":
        setDropdown3Visible(!dropdown3Visible);
        break;
      case "4":
        setDropdown4Visible(!dropdown4Visible);
        break;
      default:
        break;
    }
  };

  const toggleItemDropdown = (id) => {
    setDropdownVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  // Close dropdowns on click outside
  const handleClickOutside = (event) => {
    const dropdowns = [
      { id: "1", visible: dropdown1Visible, setVisible: setDropdown1Visible },
      { id: "2", visible: dropdown2Visible, setVisible: setDropdown2Visible },
      { id: "3", visible: dropdown3Visible, setVisible: setDropdown3Visible },
      { id: "4", visible: dropdown4Visible, setVisible: setDropdown4Visible },
    ];

    // Check if the click target is inside any of the dropdowns
    const isClickInsideDropdown = dropdowns.some(({ visible }) => visible);

    if (!isClickInsideDropdown) {
      // Close all dropdowns if the click is outside
      dropdowns.forEach(({ visible, setVisible }) => {
        if (visible) {
          setVisible(false);
        }
      });
    }
  };

  // Attach click event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdown1Visible, dropdown2Visible, dropdown3Visible, dropdown4Visible]);

  useEffect(() => {
    const fetchQRCodes = async () => {
      try {
        const email = getEmailUser();
        const response = await axios.post('http://localhost:5000/qrList/list', {
          email
          });
        setQRCodes(response.data.qrCodes);
        setLoading(false); // Set loading to false once data is fetched

        console.log(response.data.qrCodes);
      } catch (error) {
        console.error('Error fetching QR codes:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchQRCodes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.get(`http://localhost:5000/profile/delete/${id}`);
      //refresh the page
      const updatedQRCodes = qrCodes.filter((code) => code._id !== id);
      setQRCodes(updatedQRCodes);
    }
    catch (error) {
      console.error(`Error deleting QR code with id ${id}:`, error);
    }
  }



  const handleEditLink = async (id) => {
    try {
      console.log(id);
      //navigate to the edit page
      router.push(`/qr_link/${id}`); 
    }
    catch (error) {
      console.error(`Error editing QR code with id ${id}:`, error);
    }
  }

  const handleEditText = async (id) => {
    try {
      console.log(id);
      //navigate to the edit page
      router.push(`/qr_text/${id}`); 
    }
    catch (error) {
      console.error(`Error editing QR code with id ${id}:`, error);
    }
  }

  const handleEditWifi = async (id) => {
    try {
      console.log(id);
      //navigate to the edit page
      router.push(`/qr_wifi/${id}`); 
    }
    catch (error) {
      console.error(`Error editing QR code with id ${id}:`, error);
    }
  }

  const handleEditPersonal = async (id) => {
    try {
      console.log(id);
      //navigate to the edit page
      router.push(`/qr_personal/${id}`); 
    }
    catch (error) {
      console.error(`Error editing QR code with id ${id}:`, error);
    }
  }

  const handleEditPersonalData = async (id) => {
    try {
      console.log(id);
      //navigate to the edit page
      router.push(`/personalData/${id}`); 
    }
    catch (error) {
      console.error(`Error editing QR code with id ${id}:`, error);
    }
  }

  const handleEditEmail = async (id) => {
    try {
      console.log(id);
      //navigate to the edit page
      router.push(`/qr_email/${id}`); 
    }
    catch (error) {
      console.error(`Error editing QR code with id ${id}:`, error);
    }
  }
  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    toggleDropdown("1"); // Close the dropdown after selecting a filter
  };
  const handleCheckboxChange = (id) => {
    setSelectedCodes((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  const handleCopySelected = () => {
    if (selectedCodes.length === 0) {
      console.warn("No QR codes selected for copying.");
      return;
    }
  
    // Get the data of selected QR codes based on their IDs
    const selectedQRCodeData = qrCodes.filter((code) =>
      selectedCodes.includes(code._id)
    );
  
    // Implement your logic to copy the data or perform the desired action
    // For example, you can copy the links of selected QR codes to the clipboard
    const selectedLinks = selectedQRCodeData.map((code) => code.Link).join("\n");
  
    // Copy to the clipboard (you may need to adjust this based on your requirements)
    navigator.clipboard.writeText(selectedLinks).then(() => {
      console.log("Selected QR codes copied to clipboard:", selectedCodes);
      // Optionally, you can clear the selectedCodes state if needed
      setSelectedCodes([]);
    }).catch((error) => {
      console.error("Error copying selected QR codes:", error);
    });
  };
  const handleSort = (sortType) => {
    // Implement sorting logic based on sortType (e.g., "newFirst", "oldFirst")
    let sortedQRCodes;

    switch (sortType) {
      case "newFirst":
        sortedQRCodes = [...qrCodes].sort((a, b) => new Date(b.generatedAt) - new Date(a.generatedAt));
        break;
      case "oldFirst":
        sortedQRCodes = [...qrCodes].sort((a, b) => new Date(a.generatedAt) - new Date(b.generatedAt));
        break;
      default:
        // Handle other sorting options if needed
        sortedQRCodes = qrCodes;
        break;
    }

    setQRCodes(sortedQRCodes);
  };

  const handleDownloadPNG = async (id) => {
    try {
      const qrCodeContainer = document.getElementById(`qrCodeContainer_${id}`);

      if (!qrCodeContainer) {
        console.error(`QR code container with id ${id} not found.`);
        return;
      }

      const canvas = await html2canvas(qrCodeContainer);
      const dataUrl = canvas.toDataURL('image/png');

      // Create a temporary anchor element to trigger the download
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = `QRCode_${id}.png`;
      downloadLink.click();
    } catch (error) {
      console.error('Error downloading PNG:', error);
    }
  };
  return (
    <div>
      <div className={MyQR.container}>
        <div className={MyQR.header}>
          <h2>My QR Codes</h2>
          <nav>
            <ol>
              <li>All QR codes /</li>
            </ol>
          </nav>
        </div>
        <div className={MyQR.buttonContainer}>
          <a
            href="/qr_scanner"
            className={MyQR.createBtn}
            id="create-new-qenerator-btn"
            data-action="click->admin--qr-filters#createNewBtn"
          >
            <div>
              <img src="more.png" alt="add" />
              <span>Create new QR</span>
            </div>
          </a>
        </div>
      </div>
      {/* New big container with three child divs */}
      <div className={MyQR.bigContainer}>
        <div className={MyQR.headDiv1}>
          <button className={MyQR.selectAllBtn}>Select All</button>
          <button
            className={MyQR.copyBtn}
            id={MyQR.copyButton}
            onClick={handleCopySelected}
          >
          </button>
          <button className={MyQR.deleteBtn} id={MyQR.deleteButton}></button>
          <div className={MyQR.dropdown} id={MyQR.filterButton}>
            <button
              onClick={() => toggleDropdown("1")}
              className={MyQR.dropbtn}
            >
              <img
                src="filter.png"
                alt="from"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <div
              id={MyQR.dropdownContent1}
              className={`${MyQR.dropdownContent} ${
                dropdown1Visible ? MyQR.show : ""
              }`}
            >
               <a href="#" onClick={() => handleFilter("link")}>
                Link
              </a>
              <a href="#" onClick={() => handleFilter("personal")}>
                Vcard
              </a>
              <a href="#" onClick={() => handleFilter("text")}>
                Text
              </a>
            </div>
          </div>

          <div className={MyQR.dropdown} id={MyQR.fromButton}>
            <button
              onClick={() => toggleDropdown("2")}
              className={MyQR.dropbtn}
            >
              <img
                src="from.png"
                alt="from"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <div
              id={MyQR.dropdownContent2}
              className={`${MyQR.dropdownContent} ${
                dropdown2Visible ? MyQR.show : ""
              }`}
            >
              <a href="#" onClick={() => handleSort("newFirst")}>
                New First
              </a>
              <a href="#" onClick={() => handleSort("oldFirst")}>
                Old First
              </a>
            </div>
          </div>
        </div>
        <div className={MyQR.headDiv2}>
          <input type="text" id={MyQR.searchBox} placeholder="Search..." value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
        <div className={MyQR.belowDiv}>


        <ul>


          
                    {qrCodes
              .filter((code) =>
                code.Link.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .filter((code) => !selectedFilter || code.type === selectedFilter)
              .map((code, index) => (
              <li key={index}>
                <div className={MyQR.qrCodeContainer} id={`qrCodeContainer_${code._id}`}>
                  <div className={MyQR.checkboxContainer}>
                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        id={MyQR.checkbox + index}
                        checked={selectedCodes.includes(code._id)}
                        onChange={() => handleCheckboxChange(code._id)}
                      />
                      {/* Text next to the checkbox */}
                      <label
                          htmlFor={MyQR.checkbox + index}
                          className={MyQR.checkboxLabel}
                        >
                        Include in Selection
                      </label>
                  </div>
                  <img src={code.QRcode} alt={code.name} />
                    <div className={MyQR.qrCodeInfo}>
                      <p>Link: {code.Link}</p>
                      <p>Type: {code.type}</p>
                      <p>Created: {code.generatedAt}</p>
                    </div>

                    <div className={MyQR.buttonsContainer}>
                      <div className={MyQR.dropdown}>
                        <button
                          onClick={() => toggleItemDropdown(code._id)}
                          className={MyQR.dropbtn}
                        >
                          Download
                        </button>
                          <div
                            className={`${MyQR.dropdownContent} ${
                              dropdownVisibility[code._id] ? MyQR.show : ''
                            }`}
                          >
                            {/* Dropdown content */}
                            <a
                            href="#"
                        style={{ display: 'flex', alignItems: 'center' }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleDownloadPNG(code._id);
                        }}
                      >
                            PNG
                            <img
                              src="qrdowload.png"
                              alt="Download SVG"
                              style={{
                                width: "24px",
                                height: "24px",
                                marginLeft: "30px",
                              }}
                            />
                          </a>
                          <a
                              href="#"
                              style={{ display: 'flex', alignItems: 'center' }}
                              onClick={(e) => e.preventDefault()} // Prevent default behavior of anchor tag
                            >
                              SVG
                            <img
                              src="qrdowload.png"
                              alt="Download SVG"
                              style={{
                                width: "24px",
                                height: "24px",
                                marginLeft: "30px",
                              }}
                            />
                          </a>
                        </div>
                      </div>
                  <button onClick={() => {
                    if (code.type === "link" ){
                      handleEditLink(code._id);
                    } else if (code.type === "personal"){
                      handleEditPersonal(code._id);
                    }
                    else if (code.type === "text"){
                      handleEditText(code._id);
                    }
                    else if (code.type === "wifi"){
                      handleEditWifi(code._id);
                    }
                    else if (code.type === "personalData"){
                      handleEditPersonalData(code._id);
                    }
                    else if (code.type === "email"){
                      handleEditEmail(code._id);
                    }}}>Edit</button> 
                  <button onClick={() => handleDelete(code._id)}>Delete</button>
                </div>
              </div>
              </li>
            ))}

        </ul>
        </div>
      </div>
    </div>
  );
}

export default MyQRCodesContent;
