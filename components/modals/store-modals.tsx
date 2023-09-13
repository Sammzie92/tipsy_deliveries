"use client"

import { useStoreModalStore } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModalStore()
    return(
    <Modal
    title="Create Store"
    description="Add New Store"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >

        Some Text Here

    </Modal>
    )

}