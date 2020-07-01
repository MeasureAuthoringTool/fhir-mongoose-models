const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ResearchSubjectStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ResearchSubjectStatus' },
  _type: { type: String, default: 'FHIR::ResearchSubjectStatus' },
});

class ResearchSubjectStatus extends mongoose.Document {
  constructor(object) {
    super(object, ResearchSubjectStatusSchema);
    this.typeName = 'ResearchSubjectStatus';
    this._type = 'FHIR::ResearchSubjectStatus';
  }
}

module.exports.ResearchSubjectStatusSchema = ResearchSubjectStatusSchema;
module.exports.ResearchSubjectStatus = ResearchSubjectStatus;
