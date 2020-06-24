const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestReportParticipantTypeSchema } = require('./TestReportParticipantType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestReportParticipantSchema = BackboneElementSchemaFunction({
   type : TestReportParticipantTypeSchema,
   uri : String,
   display : String,
   fhirTitle: { type: String, default: 'TestReportParticipant' },
});

class TestReportParticipant extends mongoose.Document {
  constructor(object) {
    super(object, TestReportParticipantSchema);
    this._type = 'FHIR::TestReportParticipant';
  }
};


module.exports.TestReportParticipantSchema = TestReportParticipantSchema;
module.exports.TestReportParticipant = TestReportParticipant;
