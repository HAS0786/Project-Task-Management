import mongoose from "mongoose";
import Project from './Project.js';
import User from './User.js';

// Define Project schema
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, // `title` must be unique
    },
    description: String,
    task: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            index: Number,
            attachment: [
                { type: String, url: String }
            ],
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true });

// Create Project model
const ProjectModel = mongoose.model('Project', projectSchema);

// Export Project model as default
export default ProjectModel;

// Export Project and User explicitly
export { ProjectModel as Project, User };
