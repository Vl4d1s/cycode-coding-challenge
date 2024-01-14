import { useState } from "react";

import Modal from "../../components/modal/modal";
import Button from "../../components/shered-components/button/button";
import SubscriptionForm from "../../components/subscription-form/subscription-form";
import styles from "./subscribe.module.css";

const SubscribePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubscribeButtonClick = () => {
    toggleModal();
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleSubscribeButtonClick}>Subscribe</Button>

      {isModalOpen && (
        <Modal onClose={toggleModal} content={<SubscriptionForm />} />
      )}
    </div>
  );
};

export default SubscribePage;
