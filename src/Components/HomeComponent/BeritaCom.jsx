import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import kegiatan from '../../assets/kegiatan.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import keg2 from '../../assets/keg2.jpg';
import keg1 from '../../assets/keg1.jpg';
import keg3 from '../../assets/keg3.jpg';

const BeritaCom = () => {
  const data = [
    {
      title: 'Kegiatan Minggu Pertama KIRTI',
      article: "Kegiatan Minggu Pertama dilaksanakan pada hari Jum'at Siang, Setelah Sholat Jum'at.",
      date: '2 November 2024'
    },
    {
      title: 'Kegiatan Minggu Kedua KIRTI',
      article: "Kegiatan Minggu Kedua dilaksanakan pada hari Jum'at Siang, Setelah Sholat Jum'at."
    }, {
      title: 'Kegiatan Minggu Kedua KIRTI',
      article: "Kegiatan Minggu Kedua dilaksanakan pada hari Jum'at Siang, Setelah Sholat Jum'at."
    }
  ]
  return (
    <>
      <Container>
        <div class="p-4 p-md-5 mb-4 rounded text-bg-light">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">{data[0].title}</h1>
            <p class="lead my-3">{data[0].date}</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Selengkapnya...</a></p>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary"></strong>
                <h3 class="mb-0">{data[0].title}</h3>
                <div class="mb-1 text-body-secondary"></div>
                <p class="card-text mb-auto">{data[0].article}</p>
                <a href="#" class="stretched-link"></a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src={keg2} class="bd-placeholder-img" width="200" height="250"  aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"/>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary"></strong>
                <h3 class="mb-0">{data[0].title}</h3>
                <div class="mb-1 text-body-secondary"></div>
                <p class="card-text mb-auto">{data[0].article}</p>
                <a href="#" class="stretched-link"></a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="bd-placeholder-img"  src ={keg3} width="200" height="250" />
              </div>
            </div>
          </div>

          <div>
            <hr />
          </div>
        </div>
      </Container>
    </>
  )
}
export default BeritaCom;