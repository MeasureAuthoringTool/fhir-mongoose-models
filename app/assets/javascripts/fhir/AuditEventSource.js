const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventSourceSchema = BackboneElementSchemaFunction({
   site : String,
   observer : ReferenceSchema,
   type : [CodingSchema],
   fhirTitle: { type: String, default: 'AuditEventSource' },
});

class AuditEventSource extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventSourceSchema);
    this._type = 'FHIR::AuditEventSource';
  }
};


module.exports.AuditEventSourceSchema = AuditEventSourceSchema;
module.exports.AuditEventSource = AuditEventSource;
