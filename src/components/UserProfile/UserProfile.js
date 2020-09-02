
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Avatar } from '@material-ui/core';
import Money from '../Money/Money';
function UserProfile(props) {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    };
    return(
        <div>
            <Row>
                <Col>
                    <div style={{paddingTop: '50px', paddingLeft: '50px', PaddingRight: '50px'}}>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        style={{
                            display: "none"
                        }}
                        />
                        <div>
                            <Avatar
                                ref={uploadedImage}
                                style={{
                                width: "12%",
                                height: "20%",
                                borderRadius: "50%",
                                position: "absolute",
                            }}
                            />
                        </div>
                    </div>
                </Col>
                <Col>
                <div onClick={() => imageUploader.current.click()} style={{ marginTop: '200px', padding: '50px'}}> 
                <Button style={{marginTop: '-20%', marginLeft: '8%'}} variant="contained">
                    Upload Picture
                 </Button>
                 <Money />
                    </div>
                </Col>
            </Row>
        </div>
     )
}
export default UserProfile;