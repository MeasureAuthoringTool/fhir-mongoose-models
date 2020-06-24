const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { StructureMapInputModeSchema } = require('./StructureMapInputMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupInputSchema = BackboneElementSchemaFunction({
   name : String,
   type : String,
   mode : StructureMapInputModeSchema,
   documentation : String,
   fhirTitle: { type: String, default: 'StructureMapGroupInput' },
});

class StructureMapGroupInput extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupInputSchema);
    this._type = 'FHIR::StructureMapGroupInput';
  }
};


module.exports.StructureMapGroupInputSchema = StructureMapGroupInputSchema;
module.exports.StructureMapGroupInput = StructureMapGroupInput;
