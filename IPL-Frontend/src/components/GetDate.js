import React from 'react'

const GetDate = () => {
    return (
        <div>
            <form className='m-5 p-5'>
                <div className="mb-3">
                    <label htmlFor="startdate" className="form-label">
                        Start Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="startdate"

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="enddate" className="form-label">
                        End Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="enddate"
                    />
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default GetDate
