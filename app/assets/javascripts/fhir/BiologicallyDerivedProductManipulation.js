const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const BiologicallyDerivedProductManipulationSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  timeDateTime: PrimitiveDateTimeSchema,
  timePeriod: PeriodSchema,
  typeName: { type: String, default: 'BiologicallyDerivedProductManipulation' },
  _type: { type: String, default: 'FHIR::BiologicallyDerivedProductManipulation' },
});

class BiologicallyDerivedProductManipulation extends mongoose.Document {
  constructor(object) {
    super(object, BiologicallyDerivedProductManipulationSchema);
    this.typeName = 'BiologicallyDerivedProductManipulation';
    this._type = 'FHIR::BiologicallyDerivedProductManipulation';
  }
}

module.exports.BiologicallyDerivedProductManipulationSchema = BiologicallyDerivedProductManipulationSchema;
module.exports.BiologicallyDerivedProductManipulation = BiologicallyDerivedProductManipulation;
