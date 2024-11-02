import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import kegiatan from '../../assets/kegiatan.jpg';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const BeritaCom = () => {
    const data = [
        {
            title: 'lorem ianna saois OIBKSACA jjba sajsa jkajbs'
        },
        {
            title: 'lorem ianna saois OIBKSACA jjba sajsa jkajbs'
        }, {
            title: 'lorem ianna saois OIBKSACA jjba sajsa jkajbs'
        }
    ]
    return (
        <>
            <Container>
                 <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
    <div class="col-md-6 px-0">
      <h1 class="display-4 fst-italic">Pertemuan Rutin</h1>
      <p class="lead my-3">عدة أسطر نصية متعددة تعبر عن التدوية، وذلك لإعلام القراء الجدد بسرعة وكفاءة حول أكثر الأشياء إثارة للاهتمام في محتويات هذه التدوينة.</p>
      <p class="lead mb-0"><a href="#" class="text-white fw-bold">أكمل القراءة...</a></p>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">العالم</strong>
          <h3 class="mb-0">مشاركة مميزة</h3>
          <div class="mb-1 text-body-secondary">نوفمبر 12</div>
          <p class="card-text mb-auto">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي.</p>
          <a href="#" class="stretched-link">أكمل القراءة</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">التصميم</strong>
          <h3 class="mb-0">عنوان الوظيفة</h3>
          <div class="mb-1 text-body-secondary">نوفمبر 11</div>
          <p class="mb-auto">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي.</p>
          <a href="#" class="stretched-link">أكمل القراءة</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: صورة مصغرة" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>
        </div>
      </div>
    </div>
  </div>
            </Container>
        </>
    )
}
export default BeritaCom;