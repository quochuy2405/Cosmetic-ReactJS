import React, { useEffect } from "react";
import Header from "./../../components/Header/index";
import Anhdep from "./../../components/AnhDep/index";
import './styles.scss'
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Contact">
      <Header />
      <div className="body_Page">
      <h2 className="title_pro">{`TÂM SỰ MỎNG <3`}</h2>
      <div className="desc" >
         <p >Liên hệ Bùi Quốc Huy để làm đẹp nhé</p>
         <p>Hầu hết những bạn bắt đầu làm blog và theo đuổi con đường blogging của mình sẽ nhận ra rằng ĐÂY LÀ LÚC ĐỂ THAY ĐỔI.

Bởi vì bạn nhận ra rằng quá nhiều điều thú vị mà mình chưa biết, quá nhiều câu hỏi bản thân còn chưa trả lời được và quá nhiều thử thách đang chờ ở phía trước.

Blogging giúp bạn hoàn thiện được con người và đó là lý do mà rất nhiều người trên thế giới đã và đang làm.

Nếu bạn chưa biết blog là gì, đang tìm hiểu blog hay đang bước đầu làm blog. Hãy một lần nữa tìm hiểu xem bạn có gì ở phía trước với blog.</p>
      </div>
     
        <Anhdep />
      </div>
    </div>
  );
}

export default Contact;
