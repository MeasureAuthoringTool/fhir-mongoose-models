const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DiagnosticReportMediaSchema } = require('./DiagnosticReportMedia');
const { DiagnosticReportStatusSchema } = require('./DiagnosticReportStatus');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DiagnosticReportSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   status : DiagnosticReportStatusSchema,
   category : [CodeableConceptSchema],
   code : CodeableConceptSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   effectiveDateTime : DateTime,
   effectivePeriod : PeriodSchema,
   issued : DateTime,
   performer : [ReferenceSchema],
   resultsInterpreter : [ReferenceSchema],
   specimen : [ReferenceSchema],
   result : [ReferenceSchema],
   imagingStudy : [ReferenceSchema],
   media : [DiagnosticReportMediaSchema],
   conclusion : String,
   conclusionCode : [CodeableConceptSchema],
   presentedForm : [AttachmentSchema],
   fhirTitle: { type: String, default: 'DiagnosticReport' },
});

class DiagnosticReport extends mongoose.Document {
  constructor(object) {
    super(object, DiagnosticReportSchema);
    this._type = 'FHIR::DiagnosticReport';
  }
};


module.exports.DiagnosticReportSchema = DiagnosticReportSchema;
module.exports.DiagnosticReport = DiagnosticReport;
