import React, { useState, useEffect } from 'react'
import { MainLayout } from '@layouts'
import { Button, Input, Selectbox, Switch, Title, TextArea } from '@components'
import styles from './Admin.module'

import { useSelector, useDispatch } from 'react-redux'
import { fetchUserList, saveUserList } from '@/state/Modules/Admin/adminSlice'
import { REQUEST_STATUS } from '@constants'

const Admin = () => {
  const initialFormState = {
    id: Math.floor(Math.random() * 20),
    userId: null,
    title: '',
    body: ''
  }

  const [isBodyActive, setIsBodyActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ ...initialFormState })
  const getUserRequestStatus = useSelector((state) => state.admin.getUserRequestStatus)
  const saveUserRequestStatus = useSelector((state) => state.admin.saveUserRequestStatus)
  const isGetUserLoading = getUserRequestStatus === REQUEST_STATUS.LOADING
  const isSaveUserLoading = saveUserRequestStatus === REQUEST_STATUS.LOADING
  const userList = useSelector((state) => state.admin.userList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserList())
  }, [dispatch])

  const changeTextHandler = (e, key) => {
    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value
    }))
  }

  const onChangeSelect = (item) => {
    setFormData((prev) => ({
      ...prev,
      userId: item.value
    }))
  }

  const onChangeSwitch = () => {
    setIsBodyActive(!isBodyActive)
    setFormData((prev) => ({
      ...prev,
      body: ''
    }))
  }

  const saveUser = async () => {
    const payload = {
      id: '1',
      userId: formData.userId,
      title: formData.title
    }
    if (isBodyActive) payload.body = formData.body

    await dispatch(saveUserList(payload))
    setIsVisible(true)

    clearForm()
  }

  const clearForm = () => {
    setFormData((prev) => ({
      ...prev,
      ...initialFormState
    }))
  }
  return (
    <>
      <MainLayout>
        <Title text="Visual workflow automation. Now with code." size="large" />
        <div className={styles.adminText}>
          This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser
          line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size
          type is rarely used for body copy in components. We always left-align type; we never center it.
        </div>
        <div className={styles.adminForm}>
          <div className={styles.adminFormRow}>
            <Input label="Title" placeholder="Title" value={formData.title} onChange={(e) => changeTextHandler(e, 'title')} />
          </div>
          {!isGetUserLoading && (
            <div className={styles.adminFormRow}>
              <Selectbox
                label="User"
                placeholder="User seçiniz"
                isRemovable={false}
                defaultValue={formData.userId}
                options={userList}
                disabled={isGetUserLoading}
                onChange={onChangeSelect}
              />
            </div>
          )}

          {isBodyActive && (
            <div className={styles.adminFormRow}>
              <TextArea label="Body" placeholder="Body" value={formData.body} onChange={(e) => changeTextHandler(e, 'body')} />
            </div>
          )}
        </div>
        <div className={styles.adminForm}>
          <div className={styles.adminFormRow}>
            <Switch id="1" label="Body Switch" isChecked={isBodyActive} handleToggle={onChangeSwitch} />
          </div>
        </div>
        <div className={styles.formAction}>
          <Button disabled={isSaveUserLoading} type="primary" onClick={saveUser}>
            Accept
          </Button>
          <Button onClick={clearForm}>Cancel</Button>
        </div>
      </MainLayout>
    </>
  )
}

export default Admin
