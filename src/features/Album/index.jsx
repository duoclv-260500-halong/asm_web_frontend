import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 'ZWZB969E',
      title: 'Top 100 Bài Hát Nhạc Trẻ Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/8/5/2/d852eba51a52ebbbe73359ae387f4345.jpg',
      link: '/album/Top-100-Bai-Hat-Nhac-Tre-Hay-Nhat-MONO-Vuong-Anh-Tu-Keyo-Thanh-Dat/ZWZB969E.html'
    },
    {
      id: 'ZWZB96AB',
      title: 'Top 100 Pop Âu Mỹ Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/2/0/5/a20523837ad3c5aac73b31d7dac36007.jpg',
      link: '/album/Top-100-Pop-Au-My-Hay-Nhat-Adele-The-Kid-LAROI-Justin-Bieber-DJ-Snake/ZWZB96AB.html'
    },
    {
      id: 'ZWZB96DC',
      title: 'Top 100 Nhạc Hàn Quốc Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/5/1/0/2510059c9a513dcc9104945a46af3a5c.jpg',
      link: '/album/Top-100-Nhac-Han-Quoc-Hay-Nhat-BLACKPINK-IVE-G-I-DLE-TWICE/ZWZB96DC.html'
    },
    {
      id: 'ZWZB96AI',
      title: 'Top 100 Nhạc Rap Việt Nam Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/7/7/f/c77f428ea31981e69983c88516eca46d.jpg',
      link: '/album/Top-100-Nhac-Rap-Viet-Nam-Hay-Nhat-HIEUTHUHAI-G5R-Squad-Phuc-Du-Binz/ZWZB96AI.html'
    },
    {
      id: 'ZWZB96C8',
      title: 'Top 100 Nhạc R&B Âu Mỹ Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/e/0/4/9e047c9d089c68f60bce31b20ff59a97.jpg',
      link: '/album/Top-100-Nhac-R-B-Au-My-Hay-Nhat-Giveon-Khalid-Nicki-Minaj-Doja-Cat/ZWZB96C8.html'
    },
    {
      id: 'ZWZB96C7',
      title: 'Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
      link: '/album/Top-100-Nhac-Electronic-Dance-Au-My-Hay-Nhat-Alan-Walker-K-391-Emelie-Hollow-Sabrina-Carpenter/ZWZB96C7.html'
    },
    {
      id: 'ZWZB969F',
      title: 'Top 100 Nhạc Trữ Tình Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/4/3/a/843ad75cffcf672c14e9d55a52f922cc.jpg',
      link: '/album/Top-100-Nhac-Tru-Tinh-Hay-Nhat-Nhu-Quynh-Manh-Quynh-Dan-Truong-To-My/ZWZB969F.html'
    },
    {
      id: 'ZWZB96EU',
      title: 'Top 100 Nhạc Hòa Tấu Nhạc Cụ Piano Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/5/f/d/85fd9f4dbd3a1df69966f5260da67966.jpg',
      link: '/album/Top-100-Nhac-Hoa-Tau-Nhac-Cu-Piano-Hay-Nhat-Vu-Dang-Quoc-Viet-Relax-Lab-Yiruma-Kevin-Kern/ZWZB96EU.html'
    },
    {
      id: 'ZWZB96EZ',
      title: 'Top 100 Nhạc Hòa Tấu Nhạc Cụ Guitar Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/9/6/5/4965f11b796243810f2d4a808b0b0e28.jpg',
      link: '/album/Top-100-Nhac-Hoa-Tau-Nhac-Cu-Guitar-Hay-Nhat-Dinh-Quang-Minh-Dong-Hoa-Francis-Goya-Chen-Xiao-Ping/ZWZB96EZ.html'
    },
    {
      id: 'ZWZB96EW',
      title: 'Top 100 Nhạc Hòa Tấu Cổ Điển Hay Nhất',
      thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/5/1/b/151b864e73216ca847eba4caa8dbb527.jpg',
      link: '/album/Top-100-Nhac-Hoa-Tau-Co-Dien-Hay-Nhat-Contempo-Divo-Hawa-Paolo-Olmi/ZWZB96EW.html'
    }
  ]

  return (
    <div>
      <h2>Chắc là bạn sẽ thích nghe!</h2>
      <AlbumList albumList={albumList}></AlbumList>
    </div>
  );
}

export default AlbumFeature;
