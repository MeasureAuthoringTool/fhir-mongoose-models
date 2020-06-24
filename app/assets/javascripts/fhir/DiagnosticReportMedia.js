const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DiagnosticReportMediaSchema = BackboneElementSchemaFunction({
   comment : String,
   link : ReferenceSchema,
   fhirTitle: { type: String, default: 'DiagnosticReportMedia' },
});

class DiagnosticReportMedia extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticReportMediaSchema);
    this._type = 'FHIR::DiagnosticReportMedia';
  }
};


module.exports.DiagnosticReportMediaSchema = DiagnosticReportMediaSchema;
module.exports.DiagnosticReportMedia = DiagnosticReportMedia;
