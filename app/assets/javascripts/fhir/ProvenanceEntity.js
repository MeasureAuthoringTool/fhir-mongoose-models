const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ProvenanceAgentSchema } = require('./ProvenanceAgent');
const { ProvenanceEntityRoleSchema } = require('./ProvenanceEntityRole');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProvenanceEntitySchema = BackboneElementSchemaFunction({
   role : ProvenanceEntityRoleSchema,
   what : ReferenceSchema,
   agent : [ProvenanceAgentSchema],
   fhirTitle: { type: String, default: 'ProvenanceEntity' },
});

class ProvenanceEntity extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceEntitySchema);
    this._type = 'FHIR::ProvenanceEntity';
  }
};


module.exports.ProvenanceEntitySchema = ProvenanceEntitySchema;
module.exports.ProvenanceEntity = ProvenanceEntity;
