const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { BackboneElementSchema } = require('./BackboneElement');
const { CompositionAttestationModeSchema } = require('./CompositionAttestationMode');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CompositionAttesterSchema = BackboneElementSchemaFunction({
   mode : CompositionAttestationModeSchema,
   time : DateTime,
   party : ReferenceSchema,
   fhirTitle: { type: String, default: 'CompositionAttester' },
});

class CompositionAttester extends mongoose.Document {
  constructor(object) {
    super(object, CompositionAttesterSchema);
    this._type = 'FHIR::CompositionAttester';
  }
};


module.exports.CompositionAttesterSchema = CompositionAttesterSchema;
module.exports.CompositionAttester = CompositionAttester;
