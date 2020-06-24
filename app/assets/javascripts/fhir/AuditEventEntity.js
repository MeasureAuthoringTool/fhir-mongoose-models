const mongoose = require('mongoose/browser');
const { AuditEventEntityDetailSchema } = require('./AuditEventEntityDetail');
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

const AuditEventEntitySchema = BackboneElementSchemaFunction({
   what : ReferenceSchema,
   type : CodingSchema,
   role : CodingSchema,
   lifecycle : CodingSchema,
   securityLabel : [CodingSchema],
   name : String,
   description : String,
   query : String,
   detail : [AuditEventEntityDetailSchema],
   fhirTitle: { type: String, default: 'AuditEventEntity' },
});

class AuditEventEntity extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventEntitySchema);
    this._type = 'FHIR::AuditEventEntity';
  }
};


module.exports.AuditEventEntitySchema = AuditEventEntitySchema;
module.exports.AuditEventEntity = AuditEventEntity;
