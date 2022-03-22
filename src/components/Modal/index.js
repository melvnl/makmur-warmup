import React, { useEffect } from "react";
import './index.css'

import { useDispatch , useSelector} from 'react-redux'

const Modal = ({ setIsOpen }) => {

  const countries = useSelector((state) => state.countries.data);

  const {
    countries: {
      getCountries,
    },
  } = useDispatch();
  
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  console.log(countries)

    return (
      <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Add Book</h5>
            </div>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              x
            </button>
            <div className="modalContent">
                <form>
                    <div className="form-row" style={{marginBottom: 10, padding:20}}>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 16}}>
                        Title:
                    </label>
                    <input type="text" name="name" placeholder="Title" style={{fontSize: 16, width: '100%', padding:4, height:24}} />
                    </div>
                    <div className="form-row" style={{marginBottom: 10, padding:20}}>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 16}}>
                        Author:
                    </label>
                    <input type="text" name="author" placeholder="Author" style={{fontSize: 16, width: '100%', padding:4, height:24}} />
                    </div>
                    <div className="form-row" style={{marginBottom: 10, padding:20}}>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 16}}>
                        ISBN:
                    </label>
                    <input type="text" name="ISBN" placeholder="ISBN" style={{fontSize: 16, width: '100%', padding:4, height:24}} />
                    </div>
                    <div className="form-row" style={{marginBottom: 10, padding:20}}>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 16}}>
                        Published On:
                    </label>
                    <input type="text" name="publishedOn" placeholder="publishedOn" style={{fontSize: 16, width: '100%', padding:4, height:24}} />
                    </div>
                    <div className="form-row" style={{marginBottom: 10, padding:20}}>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 16}}>
                        Number of Page
                    </label>
                    <input type="text" name="numberOfPage" placeholder="Number of Page" style={{fontSize: 16, width: '100%', padding:4, height:24}} />
                    </div>
                    <div className="form-row" style={{marginBottom: 10, padding:20}}>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 16}}>
                        Country
                    </label>
                    <select name="country" style={{fontSize: 18, width: '100%', padding:4, height:24}}>
                      {!countries ? (
                        <option>Loading..</option>
                      ) : (
                        countries.map((country) =>{
                          return (<option key={country.id} style={{fontSize: 18, padding: 20}}>{country.name}</option>)
                        })
                      )}
                    </select>
                    </div>
                    <input type="submit" value="Submit" style={{ border: 'none', color:"#fff", padding: 12, backgroundColor: "#FF6F81", textAlign:"right", outline: "none"}} />
                </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  

export default Modal;