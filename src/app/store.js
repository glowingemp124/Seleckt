import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import workerReducer from '../features/workers/workerSlice';
import employerReducer from '../features/employers/employerSlice';
import industriesReducer from '../features/industries/industriesSlice';
import jobroleReducer from '../features/jobroles/jobroleSlice';
import skillsReducer from '../features/skills/skillsSlice';
import supportReducer from '../features/support/supportSlice';
import uniformsReducer from '../features/uniforms/uniformsSlice';
import templatesReducer from '../features/templates/templateSlice';
import expensesReducer from '../features/expenses/expensesSlice';
import expenseCatReducer from '../features/expenseCategories/expenseCatSlice';
import jobReducer from "../features/jobs/jobslice";
import faqReducer from '../features/faq/faqSlice';
import settingsReducer from '../features/settings/settingsSlice';
import employerJobTemplateReducer from '../features/templateJob/employerTemplateJobSlice'
import jobRolesReducer from "../features/jobs/jobroles/jobRolesSlice"


export const store = configureStore({
  reducer: {
    auth: authReducer,
    workers: workerReducer,
    employers: employerReducer,
    industries: industriesReducer,
    jobroles: jobroleReducer,
    skills: skillsReducer,
    support: supportReducer,
    templates: templatesReducer,
    uniforms: uniformsReducer,
    expenses: expensesReducer,
    expenseCat: expenseCatReducer,
    jobs: jobReducer,
    faqs: faqReducer,
    settings: settingsReducer,
    jobTemplate: employerJobTemplateReducer,
    employerJobRoles: jobRolesReducer
  }
});
