import React, { useEffect, useState } from 'react'
import Weather from './Weather';
import Popup from './Popup'
import './Searched.css'
import { NavLink } from 'react-router-dom';


const CityName = [
  'Adilabad, Andhra Pradesh ',
  'Anantapur, Andhra Pradesh ',
  'Chittoor, Andhra Pradesh ',
  'Kakinada, Andhra Pradesh ',
  'Guntur, Andhra Pradesh ',
  'Hyderabad, Andhra Pradesh ',
  'Karimnagar, Andhra Pradesh ',
  'Khammam, Andhra Pradesh ',
  'Krishna, Andhra Pradesh ',
  'Kurnool, Andhra Pradesh ',
  'Mahbubnagar, Andhra Pradesh ',
  'Medak, Andhra Pradesh ',
  'Nalgonda, Andhra Pradesh ',
  'Nizamabad, Andhra Pradesh ',
  'Ongole, Andhra Pradesh ',
  'Hyderabad, Andhra Pradesh ',
  'Srikakulam, Andhra Pradesh ',
  'Nellore, Andhra Pradesh ',
  'Visakhapatnam, Andhra Pradesh ',
  'Vizianagaram, Andhra Pradesh ',
  'Warangal, Andhra Pradesh ',
  'Eluru, Andhra Pradesh ',
  'Kadapa, Andhra Pradesh ',


  'Anjaw , Arunachal Pradesh ',
  'Changlang , Arunachal Pradesh ',
  'East Siang , Arunachal Pradesh ',
  'Kurung Kumey , Arunachal Pradesh ',
  'Lohit , Arunachal Pradesh ',
  'Lower Dibang Valley , Arunachal Pradesh ',
  'Lower Subansiri , Arunachal Pradesh ',
  'Papum Pare , Arunachal Pradesh ',
  'Tawang , Arunachal Pradesh ',
  'Tirap , Arunachal Pradesh ',
  'Dibang Valley , Arunachal Pradesh ',
  'Upper Siang , Arunachal Pradesh ',
  'Upper Subansiri , Arunachal Pradesh ',
  'West Kameng , Arunachal Pradesh ',
  'West Siang , Arunachal Pradesh ',



  'Baksa , Assam ',
  'Barpeta , Assam ',
  'Bongaigaon , Assam ',
  'Cachar , Assam ',
  'Chirang , Assam ',
  'Darrang , Assam ',
  'Dhemaji , Assam ',
  'Dima Hasao , Assam ',
  'Dhubri , Assam ',
  'Dibrugarh , Assam ',
  'Goalpara , Assam ',
  'Golaghat , Assam ',
  'Hailakandi , Assam ',
  'Jorhat , Assam ',
  'Kamrup , Assam ',
  'Kamrup Metropolitan , Assam ',
  'Karbi Anglong , Assam ',
  'Karimganj , Assam ',
  'Kokrajhar , Assam ',
  'Lakhimpur , Assam ',
  'Marigaon , Assam ',
  'Nagaon , Assam ',
  'Nalbari , Assam ',
  'Sibsagar , Assam ',
  'Sonitpur , Assam ',
  'Tinsukia , Assam ',
  'Udalguri , Assam ',



  'Araria , Bihar',
  'Arwal , Bihar',
  'Aurangabad , Bihar',
  'Banka , Bihar',
  'Begusarai , Bihar',
  'Bhagalpur , Bihar',
  'Bhojpur , Bihar',
  'Buxar , Bihar',
  'Darbhanga , Bihar',
  'East Champaran , Bihar',
  'Gaya , Bihar',
  'Gopalganj , Bihar',
  'Jamui , Bihar',
  'Jehanabad , Bihar',
  'Kaimur , Bihar',
  'Katihar , Bihar',
  'Khagaria , Bihar',
  'Kishanganj , Bihar',
  'Lakhisarai , Bihar',
  'Madhepura , Bihar',
  'Madhubani , Bihar',
  'Munger , Bihar',
  'Muzaffarpur , Bihar',
  'Nalanda , Bihar',
  'Nawada , Bihar',
  'Patna , Bihar',
  'Purnia , Bihar',
  'Rohtas , Bihar',
  'Saharsa , Bihar',
  'Samastipur , Bihar',
  'Saran , Bihar',
  'Sheikhpura , Bihar',
  'Sheohar , Bihar',
  'Sitamarhi , Bihar',
  'Siwan , Bihar',
  'Supaul , Bihar',
  'Vaishali , Bihar',
  'West Champaran , Bihar',
  'Chandigarh , Bihar',



  'Bastar , Chhattisgarh',
  'Bijapur , Chhattisgarh',
  'Bilaspur , Chhattisgarh',
  'Dantewada , Chhattisgarh',
  'Dhamtari , Chhattisgarh',
  'Durg , Chhattisgarh',
  'Jashpur , Chhattisgarh',
  'Janjgir-Champa , Chhattisgarh',
  'Korba , Chhattisgarh',
  'Koriya , Chhattisgarh',
  'Kanker , Chhattisgarh',
  'Kabirdham (Kawardha) , Chhattisgarh',
  'Mahasamund , Chhattisgarh',
  'Narayanpur , Chhattisgarh',
  'Raigarh , Chhattisgarh',
  'Rajnandgaon , Chhattisgarh',
  'Raipur , Chhattisgarh',
  'Surguja , Chhattisgarh',



  'Delhi ,New Delhi',



  'Ahmedabad , Gujarat',
  'Amreli district , Gujarat',
  'Anand , Gujarat',
  'Banaskantha , Gujarat',
  'Bharuch , Gujarat',
  'Bhavnagar , Gujarat',
  'Dahod , Gujarat',
  'The Dangs , Gujarat',
  'Gandhinagar , Gujarat',
  'Jamnagar , Gujarat',
  'Junagadh , Gujarat',
  'Kutch , Gujarat',
  'Kheda , Gujarat',
  'Mehsana , Gujarat',
  'Narmada , Gujarat',
  'Navsari , Gujarat',
  'Patan , Gujarat',
  'Panchmahal , Gujarat',
  'Porbandar , Gujarat',
  'Rajkot , Gujarat',
  'Sabarkantha , Gujarat',
  'Surendranagar , Gujarat',
  'Surat , Gujarat',
  'Vyara , Gujarat',
  'Vadodara , Gujarat',
  'Valsad , Gujarat',



  'Ambala , Haryana',
  'Bhiwani , Haryana',
  'Faridabad , Haryana',
  'Fatehabad , Haryana',
  'Gurgaon , Haryana',
  'Hissar , Haryana',
  'Jhajjar , Haryana',
  'Jind , Haryana',
  'Karnal , Haryana',
  'Kaithal , Haryana',
  'Kurukshetra , Haryana',
  'Mahendragarh , Haryana',
  'Mewat , Haryana',
  'Palwal , Haryana',
  'Panchkula , Haryana',
  'Panipat , Haryana',
  'Rewari , Haryana',
  'Rohtak , Haryana',
  'Sirsa , Haryana',
  'Sonipat , Haryana',
  'Yamuna Nagar , Haryana',



  'Bilaspur , Himachal Pradesh',
  'Chamba , Himachal Pradesh',
  'Hamirpur , Himachal Pradesh',
  'Kangra , Himachal Pradesh',
  'Kinnaur , Himachal Pradesh',
  'Kullu , Himachal Pradesh',
  'Lahaul and Spiti , Himachal Pradesh',
  'Mandi , Himachal Pradesh',
  'Shimla , Himachal Pradesh',
  'Sirmaur , Himachal Pradesh',
  'Solan , Himachal Pradesh',
  'Una , Himachal Pradesh',


  'Anantnag , J&K',
  'Badgam , J&K',
  'Bandipora , J&K',
  'Baramulla , J&K',
  'Doda , J&K',
  'Ganderbal , J&K',
  'Jammu , J&K',
  'Kargil , J&K',
  'Kathua , J&K',
  'Kishtwar , J&K',
  'Kupwara , J&K',
  'Kulgam , J&K',
  'Leh , J&K',
  'Poonch , J&K',
  'Pulwama , J&K',
  'Rajauri , J&K',
  'Ramban , J&K',
  'Reasi , J&K',
  'Samba , J&K',
  'Shopian , J&K',
  'Srinagar , J&K',
  'Udhampur , J&K',


  'Bokaro , Jharkhand',
  'Chatra , Jharkhand',
  'Deoghar , Jharkhand',
  'Dhanbad , Jharkhand',
  'Dumka , Jharkhand',
  'East Singhbhum , Jharkhand',
  'Garhwa , Jharkhand',
  'Giridih , Jharkhand',
  'Godda , Jharkhand',
  'Gumla , Jharkhand',
  'Hazaribag , Jharkhand',
  'Jamtara , Jharkhand',
  'Khunti , Jharkhand',
  'Koderma , Jharkhand',
  'Latehar , Jharkhand',
  'Lohardaga , Jharkhand',
  'Pakur , Jharkhand',
  'Palamu , Jharkhand',
  'Ramgarh , Jharkhand',
  'Ranchi , Jharkhand',
  'Sahibganj , Jharkhand',
  'Seraikela Kharsawan , Jharkhand',
  'Simdega , Jharkhand',
  'West Singhbhum , Jharkhand',



  'Bagalkot , Karnataka',
  'Bangalore Rural , Karnataka',
  'Bangalore Urban , Karnataka',
  'Belgaum , Karnataka',
  'Bellary , Karnataka',
  'Bidar , Karnataka',
  'Bijapur , Karnataka',
  'Chamarajnagar , Karnataka',
  'Chikkamagaluru , Karnataka',
  'Chikkaballapur , Karnataka',
  'Chitradurga , Karnataka',
  'Davanagere , Karnataka',
  'Dharwad , Karnataka',
  'Dakshina Kannada , Karnataka',
  'Gadag , Karnataka',
  'Gulbarga , Karnataka',
  'Hassan , Karnataka',
  'Haveri district , Karnataka',
  'Kodagu , Karnataka',
  'Kolar , Karnataka',
  'Koppal , Karnataka',
  'Mandya , Karnataka',
  'Mysore , Karnataka',
  'Raichur , Karnataka',
  'Shimoga , Karnataka',
  'Tumkur , Karnataka',
  'Udupi , Karnataka',
  'Uttara Kannada , Karnataka',
  'Ramanagara , Karnataka',
  'Yadgir , Karnataka',


  'Alappuzha , Kerala',
  'Ernakulam , Kerala',
  'Idukki , Kerala',
  'Kannur , Kerala',
  'Kasaragod , Kerala',
  'Kollam , Kerala',
  'Kottayam , Kerala',
  'Kozhikode , Kerala',
  'Malappuram , Kerala',
  'Palakkad , Kerala',
  'Pathanamthitta , Kerala',
  'Thrissur , Kerala',
  'Thiruvananthapuram , Kerala',
  'Wayanad , Kerala',


  'Alirajpur , MP',
  'Anuppur , MP',
  'Ashok Nagar , MP',
  'Balaghat , MP',
  'Barwani , MP',
  'Betul , MP',
  'Bhind , MP',
  'Bhopal , MP',
  'Burhanpur , MP',
  'Chhatarpur , MP',
  'Chhindwara , MP',
  'Damoh , MP',
  'Datia , MP',
  'Dewas , MP',
  'Dhar , MP',
  'Dindori , MP',
  'Guna , MP',
  'Gwalior , MP',
  'Harda , MP',
  'Hoshangabad , MP',
  'Indore , MP',
  'Jabalpur , MP',
  'Jhabua , MP',
  'Katni , MP',
  'Khandwa (East Nimar) , MP',
  'Khargone (West Nimar) , MP',
  'Mandla , MP',
  'Mandsaur , MP',
  'Morena , MP',
  'Narsinghpur , MP',
  'Neemuch , MP',
  'Panna , MP',
  'Rewa , MP',
  'Rajgarh , MP',
  'Ratlam , MP',
  'Raisen , MP',
  'Sagar , MP',
  'Satna , MP',
  'Sehore , MP',
  'Seoni , MP',
  'Shahdol , MP',
  'Shajapur , MP',
  'Sheopur , MP',
  'Shivpuri , MP',
  'Sidhi , MP',
  'Singrauli , MP',
  'Tikamgarh , MP',
  'Ujjain , MP',
  'Umaria , MP',
  'Vidisha , MP',


  'Ahmednagar , Maharashtra',
  'Akola , Maharashtra',
  'Amravati , Maharashtra',
  'Aurangabad , Maharashtra',
  'Bhandara , Maharashtra',
  'Beed , Maharashtra',
  'Buldhana , Maharashtra',
  'Chandrapur , Maharashtra',
  'Dhule , Maharashtra',
  'Gadchiroli , Maharashtra',
  'Gondia , Maharashtra',
  'Hingoli , Maharashtra',
  'Jalgaon , Maharashtra',
  'Jalna , Maharashtra',
  'Kolhapur , Maharashtra',
  'Latur , Maharashtra',
  'Mumbai City , Maharashtra',
  'Mumbai suburban , Maharashtra',
  'Nandurbar , Maharashtra',
  'Nanded , Maharashtra',
  'Nagpur , Maharashtra',
  'Nashik , Maharashtra',
  'Osmanabad , Maharashtra',
  'Parbhani , Maharashtra',
  'Pune , Maharashtra',
  'Raigad , Maharashtra',
  'Ratnagiri , Maharashtra',
  'Sindhudurg , Maharashtra',
  'Sangli , Maharashtra',
  'Solapur , Maharashtra',
  'Satara , Maharashtra',
  'Thane , Maharashtra',
  'Wardha , Maharashtra',
  'Washim , Maharashtra',
  'Yavatmal , Maharashtra',


  'Bishnupur , Manipur',
  'Churachandpur , Manipur',
  'Chandel , Manipur',
  'Imphal East , Manipur',
  'Senapati , Manipur',
  'Tamenglong , Manipur',
  'Thoubal , Manipur',
  'Ukhrul , Manipur',
  'Imphal West , Manipur',



  'Angul , Orissa',
  'Boudh (Bauda) , Orissa',
  'Bhadrak , Orissa',
  'Balangir , Orissa',
  'Bargarh (Baragarh) , Orissa',
  'Balasore , Orissa',
  'Cuttack , Orissa',
  'Debagarh (Deogarh) , Orissa',
  'Dhenkanal , Orissa',
  'Ganjam , Orissa',
  'Gajapati , Orissa',
  'Jharsuguda , Orissa',
  'Jajpur , Orissa',
  'Jagatsinghpur , Orissa',
  'Khordha , Orissa',
  'Kendujhar (Keonjhar) , Orissa',
  'Kalahandi , Orissa',
  'Kandhamal , Orissa',
  'Koraput , Orissa',
  'Kendrapara , Orissa',
  'Malkangiri , Orissa',
  'Mayurbhanj , Orissa',
  'Nabarangpur , Orissa',
  'Nuapada , Orissa',
  'Nayagarh , Orissa',
  'Puri , Orissa',
  'Rayagada , Orissa',
  'Sambalpur , Orissa',
  'Subarnapur (Sonepur) , Orissa',
  'Sundergarh , Orissa',



  'Amritsar , Punjab',
  'Barnala , Punjab',
  'Bathinda , Punjab',
  'Firozpur , Punjab',
  'Faridkot , Punjab',
  'Fatehgarh Sahib , Punjab',
  'Fazilka , Punjab',
  'Gurdaspur , Punjab',
  'Hoshiarpur , Punjab',
  'Jalandhar , Punjab',
  'Kapurthala , Punjab',
  'Ludhiana , Punjab',
  'Mansa , Punjab',
  'Moga , Punjab',
  'Sri Muktsar Sahib , Punjab',
  'Pathankot , Punjab',
  'Patiala , Punjab',
  'Rupnagar , Punjab',
  'Ajitgarh (Mohali) , Punjab',
  'Sangrur , Punjab',
  'Nawanshahr , Punjab',
  'Tarn Taran , Punjab',


  'Ajmer , Rajasthan',
  'Alwar , Rajasthan',
  'Bikaner , Rajasthan',
  'Barmer , Rajasthan',
  'Banswara , Rajasthan',
  'Bharatpur , Rajasthan',
  'Baran , Rajasthan',
  'Bundi , Rajasthan',
  'Bhilwara , Rajasthan',
  'Churu , Rajasthan',
  'Chittorgarh , Rajasthan',
  'Dausa , Rajasthan',
  'Dholpur , Rajasthan',
  'Dungapur , Rajasthan',
  'Ganganagar , Rajasthan',
  'Hanumangarh , Rajasthan',
  'Jhunjhunu , Rajasthan',
  'Jalore , Rajasthan',
  'Jodhpur , Rajasthan',
  'Jaipur , Rajasthan',
  'Jaisalmer , Rajasthan',
  'Jhalawar , Rajasthan',
  'Karauli , Rajasthan',
  'Kota , Rajasthan',
  'Nagaur , Rajasthan',
  'Pali , Rajasthan',
  'Pratapgarh , Rajasthan',
  'Rajsamand , Rajasthan',
  'Sikar , Rajasthan',
  'Sawai Madhopur , Rajasthan',
  'Sirohi , Rajasthan',
  'Tonk , Rajasthan',
  'Udaipur , Rajasthan',


  'East Sikkim , Sikkim',
  'North Sikkim , Sikkim',
  'South Sikkim , Sikkim',
  'West Sikkim , Sikkim',


  'Ariyalur , Tamil Nadu',
  'Chennai , Tamil Nadu',
  'Coimbatore , Tamil Nadu',
  'Cuddalore , Tamil Nadu',
  'Dharmapuri , Tamil Nadu',
  'Dindigul , Tamil Nadu',
  'Erode , Tamil Nadu',
  'Kanchipuram , Tamil Nadu',
  'Kanyakumari , Tamil Nadu',
  'Karur , Tamil Nadu',
  'Madurai , Tamil Nadu',
  'Nagapattinam , Tamil Nadu',
  'Nilgiris , Tamil Nadu',
  'Namakkal , Tamil Nadu',
  'Perambalur , Tamil Nadu',
  'Pudukkottai , Tamil Nadu',
  'Ramanathapuram , Tamil Nadu',
  'Salem , Tamil Nadu',
  'Sivaganga , Tamil Nadu',
  'Tirupur , Tamil Nadu',
  'Tiruchirappalli , Tamil Nadu',
  'Theni , Tamil Nadu',
  'Tirunelveli , Tamil Nadu',
  'Thanjavur , Tamil Nadu',
  'Thoothukudi , Tamil Nadu',
  'Tiruvallur , Tamil Nadu',
  'Tiruvarur , Tamil Nadu',
  'Tiruvannamalai , Tamil Nadu',
  'Vellore , Tamil Nadu',
  'Viluppuram , Tamil Nadu',
  'Virudhunagar , Tamil Nadu',



  'Agra , Uttar Pradesh ',
  'Allahabad , Uttar Pradesh ',
  'Aligarh , Uttar Pradesh ',
  'Ambedkar Nagar , Uttar Pradesh ',
  'Auraiya , Uttar Pradesh ',
  'Azamgarh , Uttar Pradesh ',
  'Barabanki , Uttar Pradesh ',
  'Budaun , Uttar Pradesh ',
  'Bagpat , Uttar Pradesh ',
  'Bahraich , Uttar Pradesh ',
  'Bijnor , Uttar Pradesh ',
  'Ballia , Uttar Pradesh ',
  'Banda , Uttar Pradesh ',
  'Balrampur , Uttar Pradesh ',
  'Bareilly , Uttar Pradesh ',
  'Basti , Uttar Pradesh ',
  'Bulandshahr , Uttar Pradesh ',
  'Chandauli , Uttar Pradesh ',
  'Chhatrapati Shahuji Maharaj Nagar , Uttar Pradesh ',
  'Chitrakoot , Uttar Pradesh ',
  'Deoria , Uttar Pradesh ',
  'Etah , Uttar Pradesh ',
  'Kanshi Ram Nagar , Uttar Pradesh ',
  'Etawah , Uttar Pradesh ',
  'Firozabad , Uttar Pradesh ',
  'Farrukhabad , Uttar Pradesh ',
  'Fatehpur , Uttar Pradesh ',
  'Faizabad , Uttar Pradesh ',
  'Gautam Buddh Nagar , Uttar Pradesh ',
  'Gonda , Uttar Pradesh ',
  'Ghazipur , Uttar Pradesh ',
  'Gorakhpur , Uttar Pradesh ',
  'Ghaziabad , Uttar Pradesh ',
  'Hamirpur , Uttar Pradesh ',
  'Hardoi , Uttar Pradesh ',
  'Mahamaya Nagar , Uttar Pradesh ',
  'Jhansi , Uttar Pradesh ',
  'Jalaun , Uttar Pradesh ',
  'Jyotiba Phule Nagar , Uttar Pradesh ',
  'Jaunpur district , Uttar Pradesh ',
  'Ramabai Nagar (Kanpur Dehat) , Uttar Pradesh ',
  'Kannauj , Uttar Pradesh ',
  'Kanpur , Uttar Pradesh ',
  'Kaushambi , Uttar Pradesh ',
  'Kushinagar , Uttar Pradesh ',
  'Lalitpur , Uttar Pradesh ',
  'Lakhimpur Kheri , Uttar Pradesh ',
  'Lucknow , Uttar Pradesh ',
  'Mau , Uttar Pradesh ',
  'Meerut , Uttar Pradesh ',
  'Maharajganj , Uttar Pradesh ',
  'Mahoba , Uttar Pradesh ',
  'Mirzapur , Uttar Pradesh ',
  'Moradabad , Uttar Pradesh ',
  'Mainpuri , Uttar Pradesh ',
  'Mathura , Uttar Pradesh ',
  'Muzaffarnagar , Uttar Pradesh ',
  'Panchsheel Nagar district (Hapur) , Uttar Pradesh ',
  'Pilibhit , Uttar Pradesh ',
  'Shamli , Uttar Pradesh ',
  'Pratapgarh , Uttar Pradesh ',
  'Rampur , Uttar Pradesh ',
  'Raebareli , Uttar Pradesh ',
  'Saharanpur , Uttar Pradesh ',
  'Sitapur , Uttar Pradesh ',
  'Shahjahanpur , Uttar Pradesh ',
  'Sant Kabir Nagar , Uttar Pradesh ',
  'Siddharthnagar , Uttar Pradesh ',
  'Sonbhadra , Uttar Pradesh ',
  'Sant Ravidas Nagar , Uttar Pradesh ',
  'Sultanpur , Uttar Pradesh ',
  'Shravasti , Uttar Pradesh ',
  'Unnao , Uttar Pradesh ',
  'Varanasi , Uttar Pradesh ',


  'Almora , Uttarakhand',
  'Bageshwar , Uttarakhand',
  'Chamoli , Uttarakhand',
  'Champawat , Uttarakhand',
  'Dehradun , Uttarakhand',
  'Haridwar , Uttarakhand',
  'Nainital , Uttarakhand',
  'Pauri Garhwal , Uttarakhand',
  'Pithoragarh , Uttarakhand',
  'Rudraprayag , Uttarakhand',
  'Tehri Garhwal , Uttarakhand',
  'Udham Singh Nagar , Uttarakhand',
  'Uttarkashi , Uttarakhand',


  'Birbhum , West Bengal',
  'Bankura , West Bengal',
  'Bardhaman , West Bengal',
  'Darjeeling , West Bengal',
  'Dakshin Dinajpur , West Bengal',
  'Hooghly , West Bengal',
  'Howrah , West Bengal',
  'Jalpaiguri , West Bengal',
  'Cooch Behar , West Bengal',
  'Kolkata , West Bengal',
  'Maldah , West Bengal',
  'Paschim Medinipur , West Bengal',
  'Purba Medinipur , West Bengal',
  'Murshidabad , West Bengal',
  'Nadia , West Bengal',
  'North 24 Parganas , West Bengal',
  'South 24 Parganas , West Bengal',
  'Purulia , West Bengal',
  'Uttar Dinajpur , West Bengal',

];

const Searched = (props) => {
  
    const [data, setData] = useState([]); // show weather data
    const [show ,setShow] = useState(false); // show and hide 


  const [filteredValue, setFilteredValue] = useState(" ") // input current value

  const [filteredList, setFilteredList] = useState(''); // 

  const [popup, setPopup] = useState(false)

  const searchHandler = (event) => {
    

    setFilteredValue(event.target.value || event.target.dataset.key)

    const newFilter  = CityName.filter((value) => {
      return value.toLocaleLowerCase().includes(filteredValue.toLocaleLowerCase())
    })

  if (filteredValue === "") {
   setFilteredList([])
  } else {
    setFilteredList(newFilter);
  }
};
  
   
    
    const getData = async (cityname) => {
      const API_key = "b81fb499c480239d60ee2b7d1eeec188";
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}`)
      const data = await res.json()
      setData(data)
      // console.log(data.cod===200)
    }

   
  
   
    // const changeHandler = (e) => {
    //   setInputCity(e.target.value)
    // }

    const submitHandler = (e) => {
        e.preventDefault()

        getData(filteredValue)
        
        setShow(true)
        console.log(data);
        
        setFilteredValue(" ")

    }

    useEffect(() => {
      getData()    
  }, [])
 
  const valuePassed = e => {
    localStorage.setItem('items', JSON.stringify(data));
    setPopup(true)
    // setTimeout(() => {
    //   setPopup(false)
    // },1500)
  }
  
 const handleClick = item => {
    const selectedItem = item.substring(0, item.indexOf("," ));
    setFilteredValue(selectedItem)
    document.getElementById("input").value = selectedItem;
    getData(selectedItem)
    setShow(true)
  }   


    return (
      <>
        <div className='app'>
        <h2 className='header'>Weather App &#127749;</h2>
      
              <main>
                <div className=' search-box'>
                    <input
                      autoComplete='off'
                      id='input'
                      onClick={(e) => {setShow(false)}}
                      onChange={searchHandler}
                      type="text"
                      className="search-bar"
                      placeholder="&#9925; Search... "
                    />
                    
                      <button onClick={submitHandler} className='search-submit btn btn-success'>Go</button>
                      
                     
                     {filteredList.length !==0  && !show && (
                      <ul className='filter-list'>

                    {filteredList.slice(0, 6).map((item, index) => (
                        <li onClick={() => handleClick(item)} id="city" key={index} ><a>{item}</a></li>
                    ))}
                      </ul>
                     )}
                     
                </div>
                <div className='popup'>
                {popup && <Popup />}
                </div>
              {show && data.cod!==200 && <span className='Error'>{data.message}</span>}
              {show && data.cod===200 &&
                <Weather
                country = {data?.sys?.country}
                cityname = {data?.name} 
                temperature={parseInt(data?.main?.temp)-273}
                humidity={data?.main?.humidity}
                wind={data?.wind?.speed} 
                temp_feels={parseInt(data?.main?.feels_like) - 273}
                pressure={(data?.main?.pressure) / 1000}
                
                  />
                }

                {show && data.cod===200 && <NavLink to='/'>
                <button onClick={valuePassed} className='values-button'>Set as Default</button> 
           </NavLink>}

                
                     
                
              </main>
        </div>
      <div>
      
     
      
        
      </div>
      </>
    )
}

export default Searched