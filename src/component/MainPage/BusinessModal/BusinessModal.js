import "./BusinessModal.css"

function BusinessModal({ setModalOpen, imageUrl }) {
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
    <div className='modal' onClick={closeModal}>
        <section>
            <main>
                <img className="modal-image" src={imageUrl}/>
            </main>
        </section>
    </div>
    );
}

export default BusinessModal;