const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportParticipantTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'TestReportParticipantType' },
});

class TestReportParticipantType extends mongoose.Document {
  constructor(object) {
    super(object, TestReportParticipantTypeSchema);
    this._type = 'FHIR::TestReportParticipantType';
  }
};


module.exports.TestReportParticipantTypeSchema = TestReportParticipantTypeSchema;
module.exports.TestReportParticipantType = TestReportParticipantType;
