import Footer from './Footer';
import './Style.css';
function SearchPage({setPageTab}) {
    return (
        <>
        <div className="home">
  <div className="home-header">
    <div className="home-top">
      <img
        src="https://www.macworld.com/wp-content/uploads/2023/10/apple-music-spotify-graphic.jpg?quality=50&strip=all"
        alt="icon"
        className="home-icon"
      />
      <p className="text-home">Search</p>
    </div>
    <div className="search-bar-icon">
      <input type="search" className="search-bar" />
      <i className="fa-solid fa-search" style={{ color: "#fff" }} />
    </div>
  </div>
  <div className="home-songlist">
    {/* <div class="home-song"> */}
    <div>
      <div className="song-img">
        <img
          src="https://a10.gaanacdn.com/gn_img/albums/6Zxb2r7b9w/Zxb2EV0JW9/size_m_1548564493.webp"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">kannamma unna</div>
        <div>Ispade Rajavum Idhaya Raniyum(Anirudh Ravichander)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKjGCKzWQC3cOXLccIL6UKbPhJJBQqKhdGjgQ6djUGw&s"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Unkaigal Korthu</div>
        <div>Vanakkam Chennai(Anirudh Ravichander, Vishal Dadlani)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDkcywGNJD4IXMhZQJHegLCAsBtCX4eo_g-oA4SiKSw&s"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Don'u Don'u Don'u </div>
        <div>Maari( Alisha Thomas and Anirudh Ravichander)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src=" https://pbs.twimg.com/media/FiAn4J_UcAA2f34.jpg"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Kokkarakko</div>
        <div>Ghilli(Udit Narayan, Sujatha)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://i.ytimg.com/vi/O4OqlkXC4PQ/maxresdefault.jpg"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Sirukki Vaasam</div>
        <div> Kodi(Anand Aravindakshan,Santhosh Narayanan,Shweta Mohan)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5nHOrV1NPCUap3seKwl_N1MypaSvV21sly47W14RJQ&s"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Maruvaarthai</div>
        <div>Enai Noki Paayum Thota (Sid Sriram)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU1c4UuvWWs1H0Lp1xB4Gi0YorIbPU4xbibTvwk6CPFQ&s"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name"> Thaarame Thaarame</div>
        <div> Kadaram Kondan(Sid Sriram)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKT_DPBqEmYWPixKWN63bTkctq-Fy48oblt4E0WLkFcA&s"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Kandaangi Kandaangi</div>
        <div>Jilla( Shreya Ghoshal and Vijay) </div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img
          src="https://i.ytimg.com/vi/v_uZjRVQXPU/maxresdefault.jpg"
          width="70px"
        />
      </div>
      <div className="song-name">
        <div className="s-name">Adiyae Kolluthey</div>
        <div>Vaaranam Aayiram(Krish, Benny Dayal, Shruti Haasan)</div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img src="" width="70px" />
      </div>
      <div className="song-name">
        <div className="s-name"> </div>
        <div> </div>
      </div>
    </div>
    <div>
      <div className="song-img">
        <img src="" width="70px" />
      </div>
      <div className="song-name">
        <div className="s-name"> </div>
        <div> </div>
      </div>
    </div>
  </div>
  {/* footer */}
   <Footer/>
</div>

        </>
    );
}

export default SearchPage;