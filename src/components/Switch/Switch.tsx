import React from 'react';
import './Switch.css';

interface ViewToggleProps {
    label: string;
    isChecked: boolean;
    toggleView: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ label, isChecked, toggleView }) => {
    return (
        <div className="toggle-container">
            <p>{label}</p>
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleView}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default ViewToggle;
