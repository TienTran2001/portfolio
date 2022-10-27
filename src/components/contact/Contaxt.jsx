import { BsFacebook, BsGithub } from "react-icons/bs";
import { SiGmail, SiTiktok } from "react-icons/si";
import { TbCopyright } from "react-icons/tb";

function Contact() {
  return (
    <section id="contact" className="container mt-20">
      <h2 className="heading">Contact</h2>
      <div className="flex space-x-10 text-[32px] mt-[52px] justify-center text-primary">
        <a
          href="https://www.facebook.com/profile.php?id=100013325043956"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a href="https://github.com/TienTran2001" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqVwRHDgbwtwPdZtDVLTFQrNcJlzkbLplHjtfPrzTTPPTnWTnknZXMbvqWwVnPbbJFThJB"
          target="_blank"
        >
          <SiGmail />
        </a>
        <a href="https://www.tiktok.com/@hanlaomapntt" target="_blank">
          <SiTiktok />
        </a>
      </div>
      <div className="text-center mt-5">
        <div>
          Copyright <TbCopyright className="inline-block" />
          TSleep
        </div>
        <div className="mt-4">@2022</div>
      </div>
    </section>
  );
}

export default Contact;
