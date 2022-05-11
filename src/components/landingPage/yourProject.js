import React from 'react';

const yourProject = () => {
  return <>
      <section className="your-project">
                <div className="container-fluid custom-block">
                    <div className="project-bg">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="width-wrap">
                                <p className="text-uppercase space-p">Want to launch</p>
                                <h2 className="h2 text-uppercase">your project on SafePad?</h2>
                            </div>
                            <a className="text-btn-bg" href={`${process.env.REACT_APP_Web_link}`}>
                                <span className="d-block text-shadow-btn text-capitalize">apply as a project</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  </>
};

export default yourProject;
