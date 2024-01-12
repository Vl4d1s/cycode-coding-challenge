import { useContext, useEffect, useState } from "react";

import Modal from "../../components/modal/modal";
import { OrganizationContext } from "../../context/organizations";
import Button from "../../components/shered-components/button/button";
import SubscriptionForm from "../../components/subscription-form/subscription-form";
import styles from "./subscribe.module.css";

const SubscribePage = () => {
  const { setSelectedOrg, setSelectedUsers } = useContext(OrganizationContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    setSelectedOrg(null);
    setSelectedUsers([]);
  }, [setSelectedOrg, setSelectedUsers]);

  return (
    <div className={styles.container}>
      <Button onClick={toggleModal}>Subscribe</Button>

      {isModalOpen && (
        <Modal onClose={toggleModal} content={<SubscriptionForm />} />
      )}
    </div>
  );
};

export default SubscribePage;
