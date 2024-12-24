import { Routes, Route } from 'react-router-dom';
import Aula01 from '../../Sections/HTML/Aula-01/Aula01.jsx';
import Aula02 from '../../Sections/HTML/Aula-02/Aula02.jsx';
import Aula03 from '../../Sections/HTML/Aula-03/Aula03.jsx';
import Aula04 from '../../Sections/HTML/Aula-04/Aula04.jsx';

export default function AulasHtmlRoutes() {
  return (
    <Routes>
      <Route path="/html/aula01" element={<Aula01 />} />
      <Route path="/html/aula02" element={<Aula02 />} />
      <Route path="/html/aula03" element={<Aula03 />} />
      <Route path="/html/aula04" element={<Aula04 />} />
    </Routes>
  );
}
