import { useRef, useState } from "react";
import { Modal } from "bootstrap";

function UserInfoModal() {
  const modalRef = useRef(null);

  // 간단한 state (입력 폼)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const openModal = () => {
    const modal = new Modal(modalRef.current);
    modal.show();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("회원 정보:", formData);
    // 👉 여기서 API 호출이나 저장 로직 연결
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        회원정보 입력/조회
      </button>

      <div className="modal fade" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* 헤더 */}
            <div className="modal-header">
              <h5 className="modal-title">회원정보</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="닫기"
              ></button>
            </div>

            {/* 바디 */}
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">이름</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름 입력"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">이메일</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일 입력"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">나이</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="나이 입력"
                  />
                </div>
              </form>
            </div>

            {/* 푸터 */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoModal;
