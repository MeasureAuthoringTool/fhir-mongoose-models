const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ImagingStudyStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ImagingStudyStatus' },
  _type: { type: String, default: 'FHIR::ImagingStudyStatus' },
});

class ImagingStudyStatus extends mongoose.Document {
  constructor(object) {
    super(object, ImagingStudyStatusSchema);
    this.typeName = 'ImagingStudyStatus';
    this._type = 'FHIR::ImagingStudyStatus';
  }
}

module.exports.ImagingStudyStatusSchema = ImagingStudyStatusSchema;
module.exports.ImagingStudyStatus = ImagingStudyStatus;
