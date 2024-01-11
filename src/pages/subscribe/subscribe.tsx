import styles from "./subscribe.module.css";
import Button from "../../components/shered/button/button";
import Modal from "../../components/modal/modal";
import { useState } from "react";

const SubscribePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={styles.container}>
      <Button onClick={toggleModal}>Subscribe</Button>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default SubscribePage;
